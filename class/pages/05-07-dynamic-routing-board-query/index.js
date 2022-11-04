import {useRouter} from 'next/router'

export default function StaticRoutingPage(){
    const router = useRouter()

    const onClickMove4 = () => {
        router.push("/05-08-dynamic-routed-board-query/4")
    }

    const onClickMove2 = () => {
        router.push("/05-08-dynamic-routed-board-query/2")
    }

    const onClickMove3 = () => {
        router.push("/05-08-dynamic-routed-board-query/3")
    }

    return (
        <div>
            <button onClick={onClickMove4}>4번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
        </div>
    )

}