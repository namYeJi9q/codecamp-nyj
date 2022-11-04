import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 모두 임시로 저장해 놓기 => 나중에 알아보기
  })

  return (
    <div>
      <div>askldjfklasdfjklasdjfaskldf</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>qowiejfklasjdfklasjdfklasdjf</div>
    </div>
  )
}

export default MyApp
