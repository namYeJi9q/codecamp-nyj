import { MouseEvent, useState } from "react";
import PaginationUI from "./pagination.presenter";
import { IPaginationProps } from "./pagination.types";

export default function BoardPaginationStartPage(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [isActivePage, setIsActivePage] = useState(1);
  const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const isActivePage = Number(event.currentTarget.id);
    setIsActivePage(isActivePage);
    void props.refetch({ page: Number(event.currentTarget.id) });
    void props.refetch({ page: isActivePage });
    console.log(isActivePage);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setIsActivePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setIsActivePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <>
      <PaginationUI
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        startPage={startPage}
        lastPage={lastPage}
        isActivePage={isActivePage}
      />
    </>
  );
}
