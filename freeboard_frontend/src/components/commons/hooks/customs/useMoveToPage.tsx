import { useRouter } from "next/router";

export const useMoveToPage = () => {
  const router = useRouter();
  //   const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    // setVisitedPage(path);
    void router.push(path);
  };

  return {
    // visitedPage,
    onClickMoveToPage,
  };
};
