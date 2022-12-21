import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../commons/stores";

export const useMoveToPage = () => {
  const router = useRouter();
  const [Open, setOpen] = useRecoilState(isOpenState);

  //   const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    // setVisitedPage(path);
    void router.push(path);
    setOpen(false);
  };

  return {
    // visitedPage,
    onClickMoveToPage,
  };
};
