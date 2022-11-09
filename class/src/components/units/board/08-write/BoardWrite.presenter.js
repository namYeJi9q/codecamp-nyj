import { BlueButton, RedInput } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

    const qqq = 3

    return (
        <div>
            <div>bbbbbbbbbbbb</div>
            작성자: <RedInput type="text" onChange={props.bbb} />
            제목: <input type="text" onChange={props.ccc} />
            내용: <input type="text" onChange={props.ddd} />
            <BlueButton qqq="yellow" zzz={props.eee} onClick={props.fff ? props.ggg : props.aaa}>
                {props.fff ? "수정" : "등록"}하기
            </BlueButton>
            <div>bbbbbbbbbbbb</div>
        </div>
    )

}







