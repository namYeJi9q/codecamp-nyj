import { useEffect, useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  const [contents, setContents] = useState("");

  // ReactQuill 만든 사람들이 만든 onChange이므로 이벤트 안들어롬  value타입은 stringdlek.

  // const onChangeContents = (value) => {
  //     setContents(value)
  // } 이렇게 해도 되고 그냥 생략해서 setContents 넣어도 된다.

  // useEffect(() => {
  //   async function aaa() {
  //     const { Modal } = await import("antd");
  //     Modal.success({ content: "안녕하세요!!" });
  //   }
  // });

  const onClickSubmit = async () => {
    event?.preventDefault();
    const { Modal } = await import("antd"); // code-splitting
    Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  };

  return (
    <form onSubmit={onClickSubmit}>
      <input type="text" placeholder="작성자" />
      <br />
      <input type="password" placeholder="비밀번호" />
      <br />
      <input type="text" placeholder="제목" />
      <br />
      {/* ReactQuill은 이벤트가 아니라 value값이 들어온다. */}
      <ReactQuill value={contents} onChange={setContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
