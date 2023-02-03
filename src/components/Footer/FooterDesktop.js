import React from "react";
import styled from "styled-components";
import brand1 from "../../img/Motel.png";
import brand2 from "../../img/Vison.png";

const Container = styled.footer`
  background-color: #2a2a2a;
  display: flex;
  padding-top: 64px;
  justify-content: center;
  padding-bottom: 30px;
`;
const LogoContent = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
`;
const LogoImage = styled.img``;
const Left = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const LeftText = styled.div`
  font-family: "Montserrat", sans-serif;
`;

const Right = styled.div`
  width: 50%;
  max-width: 750px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 50px;
`;
const RightColum = styled.a`
  font-family: "Montserrat", sans-serif;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;


`;
const RightColumContact = styled.a`
  font-family: "Montserrat", sans-serif;
  height: 180px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;

`;
const RightLink = styled.a`
  text-decoration: none;
`;
const RightContact = styled.span`
    padding-bottom: 30px;
`;
const RightContactSmall = styled.span`
    font-size: 11px;

`;

const Copyright = styled.footer`
  background-color: #000000;
  height: 40px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Titillium Web", sans-serif;
  @media (max-width: 768px) {
    order: 8;
  }
`;

const FooterDesktop = () => {
  return (
    <>
      <Container>
        <Left>
          <LogoContent>
            <LogoImage src={brand1} />
            <LogoImage src={brand2} />
          </LogoContent>
          <LeftText>
            Rua SPMS, Conj./Lote 175/225 - Núcleo Bandeirante - Brasília - DF
          </LeftText>
        </Left>
        <Right>
          <RightColum>
            <RightLink>Início</RightLink>
            <RightLink>Suites</RightLink>
            <RightLink>O Motel</RightLink>
          </RightColum>
          <RightColum>
            <RightLink>Gastronomia</RightLink>
            <RightLink>Localização</RightLink>
            <RightLink>Reservas</RightLink>
          </RightColum>
          <RightColumContact>
            <RightContactSmall>Whatsapp:</RightContactSmall>
            <RightContact>(061)3552-2297</RightContact>
            <RightContactSmall>Email:</RightContactSmall>
            <RightContact>contato@motelvison.com</RightContact>
          </RightColumContact>
        </Right>
      </Container>
      <Copyright>guia de motéis sites │ guia de motéis ©</Copyright>
    </>
  )
}

export default FooterDesktop