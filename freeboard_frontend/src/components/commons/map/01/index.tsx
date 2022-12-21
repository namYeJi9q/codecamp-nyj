import styled from "@emotion/styled";
import { useEffect } from "react";

// 선언하다. 윈도우를
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap1Page() {
  useEffect(() => {
    // 비어있는 스크립트 태그를 만듬
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0c2d716eaabacde4a664321997aa22c6";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.55476003182595,
            127.02034838294169
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 지도를 클릭한 위치에 표출할 마커입니다
        let marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
          // position: markerPosition,
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            let latLng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latLng);

            let message = "클릭한 위치의 위도는 " + latLng.getLat() + " 이고, ";
            message += "경도는 " + latLng.getLng() + " 입니다";

            let resultDiv = document.getElementById("clickLatlng");
            resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);

  const Map = styled.div`
    width: 400px;
    height: 260px;
  `;
  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <div id="clickLatlng"></div>
    </div>
  );
}
