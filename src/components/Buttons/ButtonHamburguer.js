import React from 'react'
import styled from "styled-components";


const Content = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

`;
const Rows = styled.div`
width: 80%;
height: 3px;
background-color: white;
border: 0;

&:after {
    content: "";
    margin-top: 10px;
    width: 40px;
    height: 3px;
    background-color: white;
    position: absolute;
  z-index: 998;
  border: 0;

  }
&:before {
    content: "";
    margin-top: -10px;
    width: 40px;
    height: 3px;
    background-color: white;
    position: absolute;
    border: 0;
  }
`;

const ButtonHamburguer = () => {
  return (
    <Content >
        <Rows />
    </Content>
  )
}

export default ButtonHamburguer