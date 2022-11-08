import { gql, useMutation, useQuery } from '@apollo/client'
import { Fragment } from 'react'

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

export default function StaticRoutedPage(){
    const { data } = useQuery(FETCH_BOARDS)

    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log("==========")
    console.log(data?.fetchBoards)
    console.log("==========")

    // const mystyles = {
    //     margin: "10px"
    // }

    const onClickDelete = async (event) => {
        await deleteBoard({
            variables: { number: Number(event.target.id) },
            refetchQueries: [{query: FETCH_BOARDS}]
        })
    }

    return (
        <div>
            {data?.fetchBoards.map((el, index) => (
                // 프레그먼트에 key 주는 방법
                // 1. 안되는 경우   =>   < key=""></>         
                // 2. 가능한 경우   =>   <Fragment key={el.number}></Fragment> 
                <div key={el.number}> {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉 유일하지 않음  */}
                    <span style={{margin: "10px"}}><input type="checkbox" /></span>
                    <span style={{margin: "10px"}}>{el.number}</span>
                    <span style={{margin: "10px"}}>{el.title}</span>
                    <span style={{margin: "10px"}}>{el.contents}</span>
                    <span style={{margin: "10px"}}><button id={el.number} onClick={onClickDelete}>삭제</button></span>
                </div>
            ))}
        </div>
    )

}