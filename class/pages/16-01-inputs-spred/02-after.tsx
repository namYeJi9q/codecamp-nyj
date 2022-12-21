import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 변수의 타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

// useState inputs 초기값 꺼내기(보기 편하게)
const initialInputs = {
  writer: "",
  title: "",
  contents: "",
};

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState(initialInputs);
  // 아래 세줄을 위에 inputs에 넣었다. 그래서 필요없어짐.
  // const [writer, setWriter] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // 목표 1개로 줄ㅣㅣ
        // variables 이게 $ 역할을 함
        ...inputs,
        // 아래 3줄도 ...inputs로 바꿀 수 있다.
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents,
      },
    });
    console.log(result);
  };

  // const onChangeInputs = (event) => {
  //   setInputs({
  //     ...inputs
  //     writer:event.target.value,
  //   });
  // };

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...prev,
      // 배열이 아니고 키값이 들어가게 하기 위해서 [] 왜냐면 객체이기 때문.
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </div>
  );
}
