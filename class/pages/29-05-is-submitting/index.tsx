import axios from "axios";
import { useState } from "react";

// ㄴ중복게시를 방지학기 위해 set useState를 이용해 disabled를 해준다.

export default function RestGetPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 리엑트 훅 폼 사용시 이걸 사용함
  // const {formState} = useForm()
  // formState.isSubmitting

  // 게시글 등록하기 버튼이라고 가정!
  const onClickSync = async () => {
    setIsSubmitting(true);

    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result); // 제대로된 결과 => { title: "....." }
    console.log(result.data.title);

    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={onClickSync} disabled={isSubmitting}>
        REST-API(동기) 요청하기
      </button>
    </div>
  );
}
