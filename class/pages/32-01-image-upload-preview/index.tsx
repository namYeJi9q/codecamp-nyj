import { gql, useMutation } from "@apollo/client";
import { type } from "os";
import { ChangeEvent, useState } from "react";
// import {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage() {
  // 이미지업로드 state
  const [imageUrl, setImageUrl] = useState("");

  // const [uploadFile] = useMutation<
  //   Pick<IMutation, "uploadFile">,
  //   IMutationUploadFileArgs
  // >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // files. <input type="file" multiple /> 일 때 여러개 드래그 가능.
    if (file === undefined) return;
    console.log(file);
    // const result = await uploadFile({ variables: { file } });
    // console.log(result.data?.uploadFile.url);
    // setImageUrl(result.data?.uploadFile.url ?? "");

    // 1. 임시URL 생성 => (가짜url- 내 브라우저에서만 접근 가능) 백엔드에 보내도 의미없어서 안보냄
    // 최신버전이라 안되는 브라우저가 있을 수 있음.
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // setImageUrl(result);

    // 2. 임시URL 생성 => (진짜url = 다른 브라우저에서도 접근 가능) 문자열은 바꾼 사진은 백엔드에 넘기면 안됨,  , 의미는 있지만 용량이 너무 많음
    // 모든 브라우저 사용가능
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유 : event.target은 태그만을 가르키지 않음
        setImageUrl(event.target?.result);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} multiple={true} />
      <img src={imageUrl} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" /> */}
    </>
  );
}
