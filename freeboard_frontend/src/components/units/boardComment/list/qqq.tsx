export default function QQQ(){
    const click5 = (event) => {
        event.stopPropagation()
        alert("5")
      }

    return <div onClick={click5}>내용</div>
}