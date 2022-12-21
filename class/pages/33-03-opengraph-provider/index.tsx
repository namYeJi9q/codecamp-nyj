//  제공자일때 => 네이버, 다음, 쿠팡
// og는 head에 입력해야해서 Head룰 import 해준다.
import Head from "next/head";

export default function OpengraphProvider() {
  return (
    <>
      <Head>
        <meta property="og:title" content="중고마켓" />
        <meta
          property="og:description"
          content="나의 중고마켓에 오신것을 환영합니다!"
        />
        <meta property="og:image" content="http://~~~" />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다.(여기는 Body입니다.)</div>
    </>
  );
}
