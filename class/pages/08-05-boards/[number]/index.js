import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage(){
    const router = useRouter()
    console.log(router)
    console.log(router.query.number)

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    console.log("==========")
    console.log(data)
    console.log("==========")

    const onClickMove = () => {
        router.push(`/08-05-boards/${router.query.number}/edit`)
    }

    return (
        <div>
            <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div>
            <div>작성자: {data && data.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data ? data.fetchBoard.contents : "로딩중입니다!!!"}</div>
            <button onClick={onClickMove}>수정하러가기</button>
        </div>
    )

}