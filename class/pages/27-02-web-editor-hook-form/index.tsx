// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
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

  const onClickSubmit = async (event) => {
    event?.preventDefault(); // onSubmit의 기본 기능(페이지 이동) 못하게 막아줘!
    const { Modal } = await import("antd"); // code-splitting
    Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  };

  return (
    <form onSubmit={onClickSubmit}>
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
