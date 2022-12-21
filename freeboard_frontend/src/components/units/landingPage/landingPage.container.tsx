import React from "react";
import * as S from "./landingPage.style";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <S.Wrapper>
      <S.Wrap {...settings}>
        <S.SliderItem src="/images/BannerImg/banner1.jpg" />
        <S.SliderItem src="/images/BannerImg/banner2.jpg" />
        <S.SliderItem src="/images/BannerImg/Snow.jpg" />
        <S.SliderItem
          src="/images/BannerImg/Clouds.jpg"
          // style={{ objectPosition: "0 50%" }}
        />
      </S.Wrap>
    </S.Wrapper>
  );
}
