import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  //   boardAddress: {
  //     addressDetail: string;
  //   };
}
// boardWrite.validation.ts 컴포넌트로 분리하려면 export 해주면 될거같다.
const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요"),
  title: yup.string().required("제목을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  email: yup
    .string()
    .email("이메일 형식에 적하밯지않습니다")
    .required("이메일 입력하세요"),
  password: yup
    .string()
    .min(4, "4자리 이상")
    .max(15, "최대 15까지 가능")
    .required("필수임다"),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "형식에 알맞지 않습니다.")
    .required("필수임다"),
});

export default function ReactHookFormPage() {
  // 데이터는 레지스터ㅓ에 저장되니 레지스터의 타입을 지정해주면 된다.
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
    // 바뀔때마다 검증 하려면 mode: " onChange" 를 적어준다.
  });

  // 레어메시지를 불러오는 법 :   formState.errors.writer?.message;

  const onClickSubmit = (data: IFormData) => {
    console.log(data);
    // data.writer 이렇게 쓰면 됨
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <input type="text" placeholder="작성자" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      <input type="text" placeholder="제목" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      <input type="text" placeholder="내용" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* <input
        type="text"
        placeholder="주소"
        {...register("boardAddress.addressDetail")}
      /> */}
      <button style={{ backgroundColor: formState.isvalid ? "yellow" : "" }}>
        등록하기
      </button>
    </form>
  );
}
