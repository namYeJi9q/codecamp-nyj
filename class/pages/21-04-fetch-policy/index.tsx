import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import FetchPolicyExample from "../../src/components/units/21-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;
export default function FetchPolicyPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery(FETCH_BOARDS);

  // 1. 새로운 컴포넌트 등장시에도 유지되는지?
  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  // 2. 새로운 페이지 이동시에도 유지되는지?
  const onClickMove = () => {
    void router.push("/21-05-fetch-policy-moved");
  };

  return (
    <>
      <button onClick={onClickIsOpen}>
        버튼을 클릭하면 새로운 컴포넌트가 나타납니다!!
      </button>
      {isOpen && <FetchPolicyExample />}
      <button onClick={onClickMove}>
        버튼을 클릭하면 새로운 컴포넌트로 이동합니다!
      </button>
    </>
  );
}
