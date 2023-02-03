import React from "react";
import styled from "styled-components";
import Button from "../Buttons/Button";

const Container = styled.div`
  width: 80%;
  display: flex;
  height: 400px;
  box-shadow: 0px 4px 10px 0px #00000014;
  @media (max-width: 1350px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
   height: 700px;
  }
`;
const MapContent = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;
const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const CardBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;
const Title = styled.div`
  font-size: 34px;
  text-align: center;
  color: #2A2A2A;
  font-family: 'Playfair Display', serif;
  padding-bottom: 16px;
`;
const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: #2A2A2A;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 16px;
  @media (max-width: 768px) {
    padding-inline: 20px;
    margin-bottom: 20px;
  }
  
`;

const CardLocalizacao = () => {
  return (
    <Container>
      <MapContent>
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7715751169662!2d-48.82743088433638!3d-26.236610671664845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deae58cfe71ce9%3A0xfb3e6a8cedd328d4!2sAv.%20Santos%20Dumont%2C%205253%20-%20Distrito%20Industrial%2C%20Joinville%20-%20SC%2C%2089219-730!5e0!3m2!1spt-BR!2sbr!4v1675381164994!5m2!1spt-BR!2sbr"/>
      </MapContent>
      <CardBody>
        <Title>Localização</Title>
        <Text>
          Avenida Santos Dumont, 5253 Zona Industrial Norte - Joinville - SC
        </Text>
        <Button variant='secondary'>
            Traçar Rota
        </Button>
      </CardBody>
    </Container>
  );
};

export default CardLocalizacao;
