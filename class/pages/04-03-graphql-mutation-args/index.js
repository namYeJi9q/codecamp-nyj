import {gql, useMutation} from '@apollo/client'

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){   # 변수의 타입 적는 곳
        createBoard(writer: $writer, title: $title, contents: $contents){       # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {                // variables 이게 $ 역할을 함
                writer: "훈이",
                title: "안녕하세요!!",
                contents: "반갑습니다"
            }
        })
        console.log(result)
    }

    return (
        <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    )

}