/* eslint-disable @typescript-eslint/no-misused-promises */
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  // 이미지업로드 state
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async () => {
    // 1. uploadFile
    // 안좋은 예제 ) Promise.all 안썻을 때 = for문에 해도 마찬가ㅣㅈ
    // 파일 한개가 실행되었을때 하나 하나 기다림  4개를 한방에 기다려줄 무언가가 필요함 -=====> promise all
    // ["file1","file2","file3","file4"].forEach(async () => {
    //   await uploadFile({ variables: { file: el }});
    // })

    // }

    // const
    //   const resultFile0 = await uploadFile({ variables: { file : files[0] } });
    //   const resultFile1 = await uploadFile({ variables: { file : files[0] } });
    //   const resultFile2 = await uploadFile({ variables: { file : files[0] } });
    //   const url0 = resultFile0.data?.uploadFile.url;
    //   const url1 = resultFile1.data?.uploadFile.url;
    //   const url2 = resultFile2.data?.uploadFile.url;
    //   const resultUrls = [url0, url1, url2]

    // 1-2 좋은예제 ) promise.all
    // const results = await Promise.all([
    //   uploadFile({ variables: { file : files[0] } }),
    //   uploadFile({ variables: { file : files[1] } }),
    //   uploadFile({ variables: { file : files[2] } })
    // ])
    // console.log(results)  // [resultFile0, resultFile1, resultFile2]
    // const resultUrls = results.map(el => el.data?.uploadFile.url);

    // 1-3 좋은예제: Promise.alll 썼을 때 - 1-2 리팩토링 결과
    // 만약 없을때를 대비해서 el !== undefined ? 결과 : undefined
    // files - [Rile0, File1, File2]
    // files.map((el) => uploadFile({variables: { file : el }})) // [uploadFile({...:File0}), ... uploadFile({...:File2})]

    const results = await Promise.all(
      files.map(async (el) =>
        el !== undefined
          ? await uploadFile({ variables: { file: el } })
          : undefined
      )
    );

    console.log(results);
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );

    // 2. createBoard
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다",
          contents: "내용입니다",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; // files. <input type="file" multiple /> 일 때 여러개 드래그 가능.
      if (file === undefined) return;
      console.log(file);
      // const result = await uploadFile

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          // console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유 : event.target은 태그만을 가르키지 않음
          // setImageUrls(event.target?.result);
          // setFile(file)
          // imageUrls[index] = event.target?.result

          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          // setFile(file)
          // files[index] = file  // 원본을 바꾸면 인식 못함
          const zzz = [...files];
          zzz[index] = file;
          setFiles(zzz);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
