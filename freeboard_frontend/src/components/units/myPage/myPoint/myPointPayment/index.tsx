import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../../commons/types/generated/types";

const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const [createPointTransaction] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION);

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨!
        name: "노르웨이 회전 의자",
        amount: selected,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/myPage", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp.imp_uid, rsp);
          // 결제 성공 시 로직,
          alert("결제에 성공하셨습니다!");
          try {
            void createPointTransaction({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  const onChangeSelect = (e: any) => {
    setSelected(e.target.value);
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>
      <select onChange={onChangeSelect}>
        <option disabled={true} selected={true}>
          가격을 선택하세요
        </option>
        <option value="100">100원</option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
      </select>
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
