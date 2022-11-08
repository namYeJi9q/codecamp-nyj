import { gql, useQuery } from '@apollo/client'

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

export default function StaticRoutedPage(){
    const { data } = useQuery(FETCH_BOARDS)

    console.log("==========")
    console.log(data?.fetchBoards)
    console.log("==========")

    // const mystyles = {
    //     margin: "10px"
    // }

    return (
        <div>
            {data?.fetchBoards.map(el => (
                <div>
                    <span style={{margin: "10px"}}><input type="checkbox" /></span>
                    <span style={{margin: "10px"}}>{el.number}</span>
                    <span style={{margin: "10px"}}>{el.title}</span>
                    <span style={{margin: "10px"}}>{el.contents}</span>
                </div>
            ))}
        </div>
    )

}