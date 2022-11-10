import {useState} from 'react'

export default function CounterStatePage(){
    const [count, setCount] = useState(0)

    function onClickCountUp(){
       setCount(1)
       setCount(2)
       setCount(3)
       setCount(count)
    }

    console.log(Math.random())

    return <button onClick={onClickCountUp}>카운트 올리기!!!</button>
}