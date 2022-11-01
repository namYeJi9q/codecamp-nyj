import QQQ from '../01-01-qqq'

export default function CounterLetDocumentPage(){

    function onClickCountUp(){
        const count = Number(document.getElementById("qqq").innerText) + 1
        document.getElementById("qqq").innerText = count
    }

    function onClickCountDown(){
        const count = Number(document.getElementById("qqq").innerText) - 1
        document.getElementById("qqq").innerText = count
    }

    return (
        <div>
            <div id="qqq">0</div>
            <button onClick={onClickCountUp}>카운트 올리기!!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!!</button>
            =================================================================
            <QQQ /> {/* 리액트와 기존방식의 차이점: 다른컴포넌트(페이지도 하나의 큰 컴포넌트)를 가져와서 조립할 수 있음 */}
        </div>
    )

}