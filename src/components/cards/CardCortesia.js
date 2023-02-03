import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  box-shadow: 0px 4px 10px 0px #00000014;
  @media (max-width: 1350px) {
    width:350px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Image = styled.img``;
const CardBody = styled.div`
  min-height: 200px;
  background-color: #ffffff;
  text-align: center;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const Title = styled.div`
  color: #2a2a2a;
  text-align: center;
  font-size: 30px;
  font-family: "Playfair Display", serif;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding-bottom: 20px;
    font-size: 28px;
    padding-top: 10px;
  }
`;
const Text = styled.div`
  color: #2a2a2a;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  padding-inline: 30px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

const CardCortesia = ({ img, title, children }) => {
  return (
    <Container>
      <Image src={img} />
      <CardBody>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </CardBody>
    </Container>
  );
};

export default CardCortesia;
