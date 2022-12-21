import { useForm } from "react-hook-form";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function ReactHookFormPage() {
  // 데이터는 레지스터ㅓ에 저장되니 레지스터의 타입을 지정해주면 된다.
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
    // data.writer 이렇게 쓰면 됨
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <input type="text" placeholder="작성자" {...register("writer")} />
      <input type="text" placeholder="제목" {...register("title")} />
      <input type="text" placeholder="내용" {...register("contents")} />
      <input
        type="text"
        placeholder="주소"
        {...register("boardAddress.addressDetail")}
      />
      <button>등록하기</button>
    </form>
  );
}
