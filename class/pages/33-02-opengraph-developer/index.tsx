// 개발자일때 => 기스코드, 카카오톡, 슬랙

import axios from "axios";

export default function OpengraphDeveloper() {
  const onClickEnter = async () => {
    // 1. 채팅데이터에 주소가 있는지 찾기 (ex. http~~ 로 시작하는 것 찾기)

    // 2. 해당 주소로 스크래핑하기
    const result = await axios.get("https://www.gmarket.co.kr");

    // 3. 메타태그에서 오픈그래프(og: ) 찾기
    // 모바일앱이나 백엔드에서 하는게 일반적 // CORS: https://www.naver.com 따라서 모바일앱이나 백엔드에서 스크래핑
    result.data.split("<meta").filter((el: string) => el.includes("og:"));
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:"))
    );
  };

  return (
    <>
      <button onClick={onClickEnter}>채팅 입력 후 엔터치기!!</button>
    </>
  );
}
