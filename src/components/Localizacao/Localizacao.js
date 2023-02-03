import React from 'react'
import styled from "styled-components";
import CardLocalizacao from '../cards/CardLocalizacao';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 80px;
background-color: #EEEEEE;
@media (max-width: 1350px) {
    padding: 70px 0;
  }
@media (max-width: 768px) {
    order: 6;
    padding: 70px 0px;
  }
`;

const Localizacao = () => {
  return (
    <Container>
      <CardLocalizacao/>
    </Container>
  )
}

export default Localizacao