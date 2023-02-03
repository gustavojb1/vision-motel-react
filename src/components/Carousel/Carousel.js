import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../img/image 1.png";
import styled from "styled-components";
import Button from "../Buttons/Button";

const Img = styled.img`
  height: 500px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const Div = styled.div`
  padding-inline: 50px;
  height: 600px;
  display: flex !important;
  justify-content: center;
  @media (max-width: 768px) {
    /* width: 100vw; */
    padding-inline: 0px;
  }
`;
const Details = styled.div`
  width: 400px;
  height: 170px;
  margin-top: -100px;
  background-color: white;
  position: absolute;
  display: flex;
  z-index: 999;
  margin-top: 400px;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 40px;
  }
`;
const DetailLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const DetailsRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 20px;
    width: 100%;
  }
`;
const DetailTitle = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 25px;
  color: #2a2a2a;
  padding-bottom: 10px;
`;
const DetailText = styled.span`
  font-family: "Montserrat", sans-serif;
  color: #2a2a2a;
`;


const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      <Div>
        <Img src={image1} alt="" />
        <Details>
          <DetailLeft>
            <DetailTitle>Suíte Cristal</DetailTitle>
            <DetailText>A partir de R$ 164,00</DetailText>
          </DetailLeft>
          <DetailsRight>
            <Button variant="secondary">Reservas</Button>
          </DetailsRight>
        </Details>
      </Div>
      <Div>
        <Img src={image1} alt="" />
        <Details>
          <DetailLeft>
            <DetailTitle>Suíte Palace</DetailTitle>
            <DetailText>A partir de R$ 200,00</DetailText>
          </DetailLeft>
          <DetailsRight>
            <Button variant="secondary">Reservas</Button>
          </DetailsRight>
        </Details>
      </Div>
      <Div>
        <Img src={image1} alt="" />
        <Details>
          <DetailLeft>
            <DetailTitle>Suíte Presidencial</DetailTitle>
            <DetailText>A partir de R$ 264,00</DetailText>
          </DetailLeft>
          <DetailsRight>
            <Button variant="secondary">Reservas</Button>
          </DetailsRight>
        </Details>
      </Div>
    </Slider>
  );
};

export default Carousel;
