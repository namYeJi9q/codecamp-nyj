import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill"; 바로 렌더링되는 애
import { useMutationCreateUseditem } from "../../../commons/hooks/queries/useMutationCreateUseditem";
import * as S from "./MarketWrite.styles";
import "react-quill/dist/quill.snow.css";
import { useAuth } from "../../../commons/hooks/customs/useAuth";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationUploadFileArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import dynamic from "next/dynamic";
import KakaoMapPage from "../../../commons/map/01";
import Button02 from "../../../commons/buttons/02";
import { ChangeEvent, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../../../commons/uploads/01/Uploads01.queries";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";

interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags?: [string];
  preventDefault?: any;
  // useditemAddress?: {
  //   zipcode?: string;
  //   addressDetail?: string;
  // };
  images?: [string];
  pickedCount?: number;
  createdAt?: string;
}

interface IMarketProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit?: boolean;
}

// 프리렌더링 시 안되게 하기 위해서 브라우저에서만 렌더링 되게끔 한다. 그래서 ReactQuill을 import를 하면 안됨.
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function MarketWrite(props: IMarketProps) {
  useAuth();
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const { onClickMoveToPage } = useMoveToPage();

  const [createUseditem] = useMutationCreateUseditem();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const { register, handleSubmit, setValue, trigger } = useForm<IFormData>({
    mode: "onChange",
  });

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; // files. <input type="file" multiple /> 일 때 여러개 드래그 가능.
      if (file === undefined) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유 : event.target은 태그만을 가르키지 않음

          const tempUrls = [...fileUrls];
          tempUrls[index] = event.target?.result;
          setFileUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onClickSubmit = async (data: IFormData) => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: [String(data.tags)],
          // useditemAddress: {
          //   zipcode: data.useditemAddress.zipcode,
          //   addressDetail: data.useditemAddress.addressDetail,
          // },
          images: [url!],
        },
      },
    });
    const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
    Modal.success({ content: "게시글 등록에 성공하였습니다!!!" });
    router.push(`/market/${result.data?.createUseditem._id}`);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
    console.log("setValue");
  };

  return (
    <>
      {/* {isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )} */}
      <S.Wrapper>
        <S.InnerWrapper>
          <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
          <S.Form onSubmit={handleSubmit(onClickSubmit)}>
            <S.InputWrapper>
              <S.Label>상품명</S.Label>
              <S.InputBox
                type="text"
                placeholder="상품명을 작성해주세요."
                {...register("name")}
                defaultValue={props.data?.fetchUseditem.name ?? ""}
                readOnly={!!props.data?.fetchUseditem.name}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>한줄요약</S.Label>
              <S.InputBox
                type="text"
                placeholder="간략하게 상품을 설명해주세요."
                {...register("remarks")}
                defaultValue={props.data?.fetchUseditem.remarks ?? ""}
                readOnly={!!props.data?.fetchUseditem.remarks}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>상품설명</S.Label>
              <ReactQuill
                style={{ height: "300px" }}
                onChange={onChangeContents}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>판매 가격</S.Label>
              <S.InputBox
                type="text"
                placeholder="판매 가격을 입력해주세요."
                {...register("price")}
                defaultValue={props.data?.fetchUseditem.price ?? 0}
                readOnly={!!props.data?.fetchUseditem.price}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>태그입력</S.Label>
              <S.InputBox
                type="text"
                placeholder="#태그 #태그 #태그"
                {...register("tags")}
                defaultValue={props.data?.fetchUseditem.tags ?? ""}
                readOnly={!!props.data?.fetchUseditem.tags}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>거래위치</S.Label>
              <S.MapWrap>
                <KakaoMapPage />
                <div>
                  <S.Label>주소</S.Label>
                  <input type="text" />
                  <input type="text" />
                </div>
              </S.MapWrap>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>사진 첨부</S.Label>
              <S.ImgWrap>
                <S.InputImg
                  type="file"
                  onChange={onChangeFile(0)}
                  ref={fileRef}
                />
                <S.InputImg
                  type="file"
                  onChange={onChangeFile(1)}
                  ref={fileRef}
                />
                <S.InputImg
                  type="file"
                  onChange={onChangeFile(2)}
                  ref={fileRef}
                />
                <S.ShowImg src={fileUrls[0]} onClick={onClickUpload} />
                <S.ShowImg src={fileUrls[1]} onClick={onClickUpload} />
                <S.ShowImg src={fileUrls[2]} onClick={onClickUpload} />
              </S.ImgWrap>
            </S.InputWrapper>
            <S.ButtonWrap>
              <Button02
                title={props.isEdit ? "수정하기" : "등록하기"}
              ></Button02>
              <Button02
                title="취소하기"
                onClick={onClickMoveToPage("/market")}
              ></Button02>
            </S.ButtonWrap>
          </S.Form>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
