import { useRouter } from "next/router";

// 동적 페이지
export default function BoardsDetailPage() {
  const router = useRouter();
  return (
    <div>
      안녕하세요 동적페이지입니다.
      <br />
      게시글아이디: {router.query.boardId}
    </div>
  );
}

// export const getServerSideProps = () => {
//   // 만약 서버사이드 렌더링을 한다면?? => out 폴더 자체가 나타나지 않음 // 생성 불가
//   //                           => next.config.js에서 exportPathMap이라는
//   //                              설정으로 현재 페이지 제외시키기
// };
