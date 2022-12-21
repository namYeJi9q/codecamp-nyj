//  제공자일때 => 네이버, 다음, 쿠팡
// og는 head에 입력해야해서 Head룰 import 해준다.
import { gql, useQuery } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../src/commons/types/generated/types";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpenGraphProvider(props: any) {
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchUseditem">,
  //   IQueryFetchUseditemArgs
  // >(FETCH_USED_ITEM, { variables: { useditemId: "639427f8531bd200286b58eb" } });

  console.log(props);
  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다.(여기는 Body입니다.)</div>
    </>
  );
}

// 1. getServerSideProps는 존재하는 단어이므로 변경 불가능
// 2. 여기는 서버에서만 실행됨(프론트엔드 서버프로그램 - 터미널.. 다른말로 / webpack 서버프로그램 / 라 한다.
export const getServerSideProps = async () => {
  console.log("여기는 서버입니다.");

  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "https://backend10.codebootcamp.co.kr/graphql"
  );
  const result = await graphQLClient.request(FETCH_USED_ITEM, {
    useditemId: "639427f8531bd200286b58eb",
  });

  console.log(result);
  // 2. 받은 결과를 return
  // 무조건 props라고 해야함
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
