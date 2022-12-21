import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";

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

export default function GraphqlMutationPage(){
    const router = useRouter()
    console.log(router)
    console.log(router.query.number)

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    return (
        <>
            <div>zzzzzzzzzzzz</div>
            <BoardWrite isEdit={true} data={data} />
            <div>zzzzzzzzzzzz</div>
       </>
    )
}