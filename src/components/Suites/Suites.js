import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";

const Container = styled.div`
  background-color: #7a7266;
  text-align: center;

  @media (max-width: 768px) {
    order: 3;
  }
`;
const Title = styled.div`
  background-color: #7a7266;
  font-size: 34px;
  font-family: "Playfair Display", serif;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 32px;
`;
const CarouselContent = styled.div`
  margin-bottom: 50px;
  height: 600px;
  position: relative;
  @media (max-width: 768px) {
    /* width: 100%; */
  }
`;
const LinkContent = styled.div`
  padding-bottom: 50px;
`;
const Link = styled.a`
  font-size: 14;
  font-family: "Montserrat", sans-serif;
  text-decoration: underline;
  padding-bottom: 50px;
  cursor: pointer;
`;

const Suites = () => {
  return (
    <Container>
      <Title>Nossas Suites</Title>
      <CarouselContent>
        <Carousel />
      </CarouselContent>
      <LinkContent>
        <Link>Ver todas suites</Link>
      </LinkContent>
    </Container>
  );
};

export default Suites;
