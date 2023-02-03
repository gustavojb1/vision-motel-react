import React from "react";
import styled from "styled-components";
import CardCortesia from "../cards/CardCortesia";
import img1 from "../../img/img 1.png";
import img2 from "../../img/img 2.png";
import img3 from "../../img/img 3.png";
import Button from "../Buttons/Button";

const Container = styled.div`
  background-color: #6c6359;
  padding: 72px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  @media (max-width: 768px) {
    order: 5;
    padding: 72px 0px;
    justify-content: center;
  }
`;
const ContainerCard = styled.div`
  display: flex;
  column-gap: 30px;
  justify-content: center;
  padding-bottom: 35px;
  flex-wrap: wrap;
  row-gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
    column-gap: 0px;
    align-items: center;
  }
`;
const Tittle = styled.div`
  padding-bottom: 32px;
  font-size: 45px;
  text-align: center;
`;

const Cortesias = () => {
  return (
    <Container>
      <Tittle>Cortesias</Tittle>
      <ContainerCard>
        <CardCortesia img={img1} title={"Café da Manhã"}>
          Servido todos os dias entre 6h e 10h, somente para o pernoite.
        </CardCortesia>
        <CardCortesia img={img2} title={"Especial para Aniversariantes"}>
          A equipe do Vison Motel quer tornar o seu aniversário ainda mais
          especial!
        </CardCortesia>
        <CardCortesia img={img3} title={"Descontos"}>
          Economize se hospedando com desconto no Motel Vison!
        </CardCortesia>
      </ContainerCard>
      <Button variant="tertiary">Ver todas as cortesias</Button>
    </Container>
  );
};

export default Cortesias;
