import React from 'react'
import styled from "styled-components";
import background from '../../img/slider-d.png'
import Button from '../Buttons/Button';

const Container = styled.div`
  color: red;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    order: 1;
    height: calc(100vh - 65px);
  }
`
const SmalText = styled.div`
font-family: 'Montserrat', sans-serif;
font-weight: 500;
font-size: 22px;
@media (max-width: 768px) {
  font-size: 18px;
  }
`
const LargeText = styled.div`
font-family: 'Playfair Display', serif;
font-size: 67px;
@media (max-width: 768px) {
  font-size: 50px;
  }
`
const ButtonContent = styled.div`
display: flex;
column-gap: 20px;
margin-top: 10px;
`

const main = () => {
  return (
    <Container>
      <SmalText>Bem Vindo</SmalText>
      <LargeText>Vision Motel</LargeText>
      <ButtonContent>
        <Button variant='primary'>Ver Suítes</Button>
        <Button variant='secondary'>Reservas</Button>
      </ButtonContent>
    </Container>
  )
}

export default main