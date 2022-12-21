import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccess() {
  // const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2.
  // const [] = useLazyQu

  // 3. axios와 동일
  // const client = useApolloClient()
  // client.query({ })

  const client = useApolloClient();

  // 클릭시 요청이 나가니까 기다려줘야한다.
  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return <button onClick={onClickButton}>클릭하세요</button>;
  // <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
}
