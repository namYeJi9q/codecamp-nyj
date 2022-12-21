// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Router, useRouter } from "next/router";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    // 레지스터로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // onChange됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기술
    void trigger("contents");
  };
  // 이렇게 해도 되고 그냥 생략해서 setContents 넣어도 된다.

  const onClickSubmit = async (data) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
    const boardId = result.data?.createBoard._id;
    if (typeof boardId === "string")
      void router.push(`/27-04-web-editor-detail/${boardId}`);

    // event?.preventDefault(); // onSubmit의 기본 기능(페이지 이동) 못하게 막아줘!
    // const { Modal } = await import("antd"); // code-splitting
    // Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <input type="text" placeholder="작성자" {...register("writer")} />
      <br />
      <input type="password" placeholder="비밀번호" {...register("password")} />
      <br />
      <input type="text" placeholder="제목" {...register("title")} />
      <br />
      {/* ReactQuill은 이벤트가 아니라 value값이 들어온다. */}
      <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
