import { DownSquareOutlined, PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(DownSquareOutlined)`
  color: red;
  font-size: 50px;
`;

const onClickDelete = (event) => {
  alert(event.currentTarget.id);
};

export default function LibraryIconPage() {
  return (
    <div id="asdfasdf" onClick={onClickDelete}>
      <MyIcon />;
    </div>
  );
}
