import {useState} from 'react'

export default function CounterStatePage(){
    // let count = 10
    const [count, setCount] = useState(0)

    function onClickCountUp(){
        // count = count + 1 // let은 리액트 html에서 변경을 감지하지 못함
       setCount(count) // state는 리액트 html에서 변경을 감지함(즉, document.get... 필요없음)
    }

    function onClickCountDown(){
        // count = count - 1
        setCount(count - 1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!!</button>
        </>
    )

}