import axios from 'axios'
import { useState } from 'react'

export default function RestGetPage(){
    const [title, setTitle] = useState("")

    // function onClickAsync(){   =>   함수 중복 선언 문제를 피하자!!! (화살표 함수로 변경)
    const onClickAsync = () => {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) // Promise
    }

    // async function onClickSync(){   =>   함수 중복 선언 문제를 피하자!!! (화살표 함수로 변경)
    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result) // 제대로된 결과 => { title: "....." }
        console.log(result.data.title)
        setTitle(result.data.title)
    }

    return (
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
            <div>{title}</div>
        </div>
    )

}