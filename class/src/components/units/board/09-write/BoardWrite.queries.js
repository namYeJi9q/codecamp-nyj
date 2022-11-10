import { gql } from "@apollo/client";

export const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){  # 변수의 타입 적는 곳
        createBoard(writer: $writer, title: $title, contents: $contents){      # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String){  # 변수의 타입 적는 곳
        updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){   # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`