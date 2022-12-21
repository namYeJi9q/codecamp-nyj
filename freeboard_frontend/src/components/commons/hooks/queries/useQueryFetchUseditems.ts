import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      price
      remarks
      contents
      images
      createdAt
      seller {
        name
      }
    }
  }
`;
