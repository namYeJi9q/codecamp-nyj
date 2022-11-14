import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const qqq = 3;

  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해 놓기 => 나중에 알아보기
  });

  return (
    <div>
      <div>rrrrrrrrrr</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>rrrrrrrrrrr</div>
    </div>
  );
}

export default MyApp;
