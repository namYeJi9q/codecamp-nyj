import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'

import { UPDATE_BOARD, 나의그래프큐엘셋팅 } from './BoardWrite.queries'                      // export 가져오기
import BoardWriteUI from "./BoardWrite.presenter"                         // export default 가져오기
import { useRouter } from 'next/router'
import { IBoardWriteProps, IMyvariables } from './BoardWrite.types'
// import Aqwlkjefkoasjd from "./BoardWrite.presenter"                    // export default 이름 바꿔서 가져오기
// import Aqwlkjefkoasjd, { 나의그래프큐엘셋팅 } from "./BoardWrite.presenter" // export default와 export 함께 가져오기

// import * as S from './BoardWrite.styles'                             // export 한방에 다 가져오기
// S.BlueButton                                                         // export 한방에 다 가져오기
// S.RedInput                                                           // export 한방에 다 가져오기



export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter()

    const [isActive, setIsActive] = useState(false)

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    
    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    const onClickSubmit = async () => {
        // router.query.number // undefined

        const result = await 나의함수({
            variables: {                // variables 이게 $ 역할을 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/09-01-boards/${result.data.createBoard.number}`) 
    }

    const onClickEdit = async () => {
        // router.query.number // 13

        const myvariables: IMyvariables = { number: Number(router.query.number) }
        if(writer) myvariables.writer = writer
        if(title) myvariables.title = title
        if(contents) myvariables.contents = contents

        const result = await updateBoard({
            variables: myvariables
        })
        console.log(result)
        router.push(`/09-01-boards/${result.data.updateBoard.number}`) 
    }
    
    console.log(Math.random())

    // 원래는 우리가 이렇게 만들었었어야함
    // interface IEvent {
    //     target: {
    //         id: string
    //         value: string
    //     }
    // }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
        
        if(event.target.value && title && contents){
            setIsActive(true)
        }
    }
    
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)

        if(writer && event.target.value && contents){
            setIsActive(true)
        }
    }
    
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)

        if(writer && title && event.target.value){
            setIsActive(true)
        }
    }

    return (
        <div>
            <div>aaaaaaaaaaaaaa</div>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isActive={isActive}
                isEdit={props.isEdit}
                onClickEdit={onClickEdit}
                data={props.data}
            />
            <div>aaaaaaaaaaaaaa</div>
        </div>
    )

}






