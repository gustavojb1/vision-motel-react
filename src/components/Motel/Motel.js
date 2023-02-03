import React from "react";
import styled from "styled-components";
import motel from "../../img/o-motel-d.png";
import Button from '../Buttons/Button';

const Container = styled.div`
  background-color: #EEEEEE;
  display: flex;
  padding: 80px;
  justify-content: center;
  @media (max-width: 1350px) {
    padding: 80px 40px;
  }
  @media (max-width: 768px) {
    order: 4;
    flex-direction: column;
    padding: 0;
    align-items: center;
  }
`;
const Details = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 40%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);
  padding: 72px 32px;
  margin-top: 32px;
  min-height: 600px;
  @media (max-width: 1350px) {
    width:50%;
  }
  @media (max-width: 768px) {
    order: 4;
    flex-direction: column;
    width: 90%;
    margin-top: -100px;
    margin-bottom: 64px;
  }
`;
const DetailsTitle = styled.div`
  color: #2a2a2a;
  font-family: "Playfair Display", serif;
  font-size: 34px;
`;
const DetailsText = styled.div`

`;
const Image = styled.img`
  background-color: #eeeeee;
  width: 40%;
  height: 600px;
  object-fit: cover;

  @media (max-width: 1350px) {
    width:50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const Paragrapher= styled.p`
  color: #2a2a2a;
  font-family: "Montserrat", sans-serif;
  margin-top: 20px;
  font-size: 1.3em;
  &:last-of-type{
    padding-bottom: 50px;
  }
`;

const Motel = () => {
  return (
    <Container>
      <Details>
        <DetailsTitle>O Motel</DetailsTitle>
        <DetailsText>
          <Paragrapher>
          O Vison Motel está localizado na Zona Industrial Norte, em Joinville e
          conta com ambientes exclusivos e privativos, basta escolher a suíte
          que mais combina com você.
          </Paragrapher> 
          <Paragrapher>
          Todos os quartos são equipados com TV,
          ar-condicionado, ducha, frigobar e garagem privativa, enquanto outras
          opções vão além: oferecem hidromassagem, pole dance, x sado e no caso
          da Suíte Erótika, até mesmo uma jaula ao redor da cama.
          </Paragrapher> 
          <Paragrapher>
          Hospede-se e
          aproveite ainda nosso delicioso café da manhã, servido todos os dias
          para pernoites!
          </Paragrapher> 
          <Button variant='secondary'>
            Saiba mais
          </Button>
        </DetailsText>
      </Details>
      <Image src={motel} />
    </Container>
  );
};

export default Motel;
