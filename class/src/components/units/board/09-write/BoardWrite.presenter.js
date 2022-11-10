import { BlueButton, RedInput } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

    const qqq = 3

    return (
        <div>
            <div>bbbbbbbbbbbb</div>
            작성자: <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} />
            제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/>
            내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} />
            <BlueButton qqq="yellow" zzz={props.isActive} onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}>
                {props.isEdit ? "수정" : "등록"}하기
            </BlueButton>
            <div>bbbbbbbbbbbb</div>
        </div>
    )

}







