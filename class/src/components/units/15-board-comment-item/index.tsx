import { useState } from "react";

export default function BoardCommentItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div key={props.el._id}>
      {!isEdit && (
        <div>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.contents}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      )}
      {isEdit && <input type="text" />}
    </div>
  );
}
