// import { gql, useQuery } from "@apollo/client";
// import { useState } from "react";
// import {
//   IQuery,
//   IQueryFetchBoardsArgs,
// } from "../../src/commons/types/generated/types";

// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

// const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
//   setMyIndex(Number(event.currentTarget.id));
// };

// export default function StaticRoutedPage() {
//   const [myIndex, secMyindex] = useState(9);

//   const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
//     FETCH_BOARDS
//   );

//   return (
//     <div>
//       {data?.fetchBoards?.map((el, index) => (
//         <div key={el._id}>
//           {index !== myIndex && (
//             <div>
//               <span style={{ margin: "10px" }}>{el.title}</span>
//               <span style={{ margin: "10px" }}>{el.contents}</span>
//               <button id={String(index)} onClick={onClickEdit}>
//                 수정하기
//               </button>
//             </div>
//           )}
//           {index === myIndex && <input type="text" />}
//         </div>
//       ))}
//     </div>
//   );
// }
import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const [myIndex, setMyIndex] = useState(2);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && (
            <div>
              <span style={{ margin: "10px" }}>{el.title}</span>
              <span style={{ margin: "10px" }}>{el.contents}</span>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          )}
          {index === myIndex && <input type="text" />}
        </div>
      ))}
    </div>
  );
}
