import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [change, setChange] = useState();

  useEffect(() => {
    const onreadystatechange = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result); // 제대로된 결과 => { title: "....." }
      console.log(result.data.message);
      setChange(result.data.message);
    };
    onreadystatechange();
  }, []);

  return (
    <div>
      <img src={change} />
    </div>
  );
}
