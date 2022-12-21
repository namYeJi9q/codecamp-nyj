import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div``;

export const Wrap = styled(Slider)`
  .slick-prev {
    left: 30px;
    // z-index 없으면 안됨
    z-index: 1;
  }
  .slick-next {
    right: 30px;
  }
  .slick-dots li button:before {
    top: -60px;
    color: rgba(255, 255, 255, 0.85);
  }
  height: 100%;
`;

export const SliderItem = styled.img`
  height: 100%;
  object-fit: cover;
  color: pink;
`;
