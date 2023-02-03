import React from "react";
import styled from "styled-components";
import brand1 from "../../img/Motel.png";
import brand2 from "../../img/Vison.png";

const Container = styled.footer`
  background-color: #2a2a2a;
  order: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 46px;
`;
const LogoContainer = styled.div`
  width: 220px;
  height: 90px;
  margin-bottom: 32px;
`;
const LogoImg = styled.img`
  width: 100%;
  height: 50%;
`;
const Separador = styled.div`
  width: 80%;
  height: 1px;
  background-color: white;
  margin-bottom: 32px;
`;
const Btn1 = styled.div`
  width: 80%;
  height: 55px;
  margin-bottom: 20px;
  background-color: #7a7266;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
const Btn2 = styled.div`
  width: 80%;
  height: 55px;
  margin-bottom: 20px;
  cursor: pointer;
  border: 2px solid #ffffff;
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
const Copyright = styled.div`
  margin-top: 46px;
  background-color: #000000;
  width: 100%;
  height: 40px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Titillium Web", sans-serif;
`;

const FooterMobile = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImg src={brand1} alt="" />
        <LogoImg src={brand2} alt="" />
      </LogoContainer>
      <Separador />
      <Btn1>Reservas</Btn1>
      <Btn1>Ver Suites</Btn1>
      <Btn2>Whatsapp</Btn2>
      <Btn2>Contato</Btn2>
      <Copyright>guia de motéis sites │ guia de motéis ©</Copyright>
    </Container>
  );
};

export default FooterMobile;
