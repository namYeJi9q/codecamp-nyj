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
