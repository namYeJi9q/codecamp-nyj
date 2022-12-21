import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import * as S from "./MarketList.styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
import Search02Page from "../../../commons/search/02/search02.container";
import { MouseEvent, useState } from "react";
import { FETCH_USED_ITEMS } from "../../../commons/hooks/queries/useQueryFetchUseditems";
import InfiniteScroll from "react-infinite-scroller";
import { FETCH_USED_ITEM } from "../../../commons/hooks/queries/useQueryFetchUseditem";
import { PlusOutlined } from "@ant-design/icons";

const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      seller {
        name
      }
    }
  }
`;

export default function MarketList() {
  const router = useRouter();
  const mySecretCode = uuidv4();
  const [keyword, setKeyword] = useState("");
  const { onClickMoveToPage } = useMoveToPage();
  //  onClick={onClickMoveToPage("/boards")}

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { page: Number(router.query.page) } });

  const { data: itemData } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const { data: bestItemData } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USED_ITEMS_OF_THE_BEST);

  console.log("bestItemData :", bestItemData);

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${event.currentTarget.id}`);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Title>Market</S.Title>

        <S.BestitemWrap>
          <S.BestTitle>인기 상품</S.BestTitle>
          <S.ItemBoxWrap>
            {bestItemData?.fetchUseditemsOfTheBest.map((el) => (
              <S.Row key={el._id}>
                <S.ProductThumbnail>
                  <S.Image
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />

                  <S.Heart />
                </S.ProductThumbnail>
                <S.ProductInfo>
                  <S.ColumnTitle onClick={onClickMoveToDetail} id={el._id}>
                    {el.name}
                  </S.ColumnTitle>
                  <S.SellerName>{el.seller?.name}</S.SellerName>
                  <S.Price>{el.price}원</S.Price>
                  <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                </S.ProductInfo>
              </S.Row>
            ))}
          </S.ItemBoxWrap>
        </S.BestitemWrap>

        <S.SearchWrap>
          <Search02Page refetch={refetch} onChangeKeyword={onChangeKeyword} />
          <div>
            <S.Button onClick={onClickMoveToPage("/market/new")}>
              상품 등록하기 <PlusOutlined />
            </S.Button>
          </div>
        </S.SearchWrap>
        <S.FlexWrap>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={true}
          >
            <S.ItemBoxWrap>
              {data?.fetchUseditems.map((el) => (
                <S.Row key={el._id}>
                  <S.ProductThumbnail>
                    <S.Image
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                    <S.Heart />
                  </S.ProductThumbnail>
                  <S.ProductInfo>
                    <S.ColumnTitle onClick={onClickMoveToDetail} id={el._id}>
                      {el.name
                        .replaceAll(
                          keyword,
                          `${mySecretCode}${keyword}${mySecretCode}`
                        )
                        .split(mySecretCode)
                        .map((el) => (
                          <span
                            key={mySecretCode}
                            style={{
                              color: el === keyword ? "red" : "black",
                            }}
                          >
                            {el}
                          </span>
                        ))}
                    </S.ColumnTitle>
                    <S.SellerName>{el.seller?.name}</S.SellerName>
                    <S.Price>{el.price}원</S.Price>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                  </S.ProductInfo>
                </S.Row>
              ))}
            </S.ItemBoxWrap>
          </InfiniteScroll>
        </S.FlexWrap>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
