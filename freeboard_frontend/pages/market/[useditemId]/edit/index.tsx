import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { useAuth } from "../../../../src/components/commons/hooks/customs/useAuth";
import { FETCH_USED_ITEM } from "../../../../src/components/commons/hooks/queries/useQueryFetchUseditem";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";

export default function MarketEditPage() {
  useAuth();
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  return <MarketWrite data={data} />;
}
