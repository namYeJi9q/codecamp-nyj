import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { IQuery, IQueryFetchBoardArgs } from '../../src/commons/types/generated/types'

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
    console.log(router.query.qqq)

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: { number: Number(router.query.qqq) }
    })

    console.log("==========")
    console.log(data)
    console.log("==========")

    return (
        <div>
            <div>{router.query.qqq}번 게시글로 이동이 완료되었습니다.</div>
            <div>작성자: {data && data.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data ? data.fetchBoard.contents : "로딩중입니다!!!"}</div>
        </div>
    )

}