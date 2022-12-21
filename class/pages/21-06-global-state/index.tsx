import BoardWrite from "../../src/components/units/21-global-state/BoardWrite.conteiner";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { isEditState } from "../../src/commons/stores";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <BoardWrite />;
}
