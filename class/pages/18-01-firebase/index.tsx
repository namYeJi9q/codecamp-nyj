import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { app } from "../../src/commons/libraries/firebase";

export default function FirebasePage() {
  const onClickSubmit = () => {
    const board = collection(getFirestore(app), "board");
    void addDoc(board, {
      writer: "유리",
      title: "안녕!하세요",
      contents: "반갑습니다!!",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(app), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
