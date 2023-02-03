import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Buttons/Button";
import ButtonHamburguer from "../Buttons/ButtonHamburguer";
import brand1 from "../../img/Motel.png";
import brand2 from "../../img/Vison.png";

const NavBar = styled.div`
  padding-top: 15px;
  position: absolute;
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    order: 2;
    position: static;
    background-color: #2a2a2a;
    padding-top: 0px;
    padding-block: 15px;
  }
`;
const NavBrand = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NavBrandImage = styled.img`
  height: 49%;
  width: 113px;
`;
const NavItens = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;

  @media (max-width: 1021px) {
    column-gap: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ButtonContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Link = styled.a`
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
`;
const ButtonHamburguerContent = styled.div`
  display: none;
  margin-right: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;
const MenuMobile = styled.div`
  display: ${(props) => (props.count === false ? "none" : "flex")};
  background-color: #2a2a2a;
  width: 100%;
  position: absolute;
  z-index: 99999;
  margin-top: 62px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 25px;
  padding: 20px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;
const LinkMobile = styled.a`
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  /* cursor: pointer; */

  &:after {
    margin-top: 10px;
    width: 80vw;
    height: 2px;
    margin-bottom: 2px;
    content: "";
    display: block;
    background-color: white;
    border-radius: 10px;
  }
`;

function onClick(setCount) {
  setCount((count) => {
    setCount(!count);
  });
}

const Header = () => {
  const [count, setCount] = useState(false);
  const [navMobile, setNavMobile] = useState("menu");

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setNavMobile("navMobile");
      } else {
        setNavMobile("menu");
      }
    };

    window.addEventListener("resize", handleWindowResize);

    window.onload = function exampleFunction() {
      handleWindowResize();
    };

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function Scroll(component) {
    switch (component) {
      case "inicio":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case "suites":
        window.scrollTo({
          top: 900,
          behavior: "smooth",
        });
        break;
      case "motel":
        window.scrollTo({
          top: 1800,
          behavior: "smooth",
        });
        break;
      case "cortesias":
        window.scrollTo({
          top: 2600,
          behavior: "smooth",
        });
        break;
      case "localizacao":
        window.scrollTo({
          top: 3900,
          behavior: "smooth",
        });
        break;
      case "contato":
        window.scrollTo({
          top: 3900,
          behavior: "smooth",
        });
        break;
      default:
        window.scrollTo({
          top: 100,
          behavior: "smooth",
        });
        break;
    }
  }

  return (
    <NavBar>
      <NavBrand>
        <NavBrandImage src={brand1} alt="" />
        <NavBrandImage src={brand2} alt="" />
      </NavBrand>
      <NavItens>
        <Link onClick={() => Scroll("inicio")} href="#" alt="">
          Início
        </Link>
        <Link onClick={() => Scroll("suites")} href="#" alt="">
          Suites
        </Link>
        <Link onClick={() => Scroll("motel")} href="#" alt="">
          O Motel
        </Link>
        <Link onClick={() => Scroll("cortesias")} href="#" alt="">
          Cortesias
        </Link>
        <Link onClick={() => Scroll("localizacao")} href="#" alt="">
          Localização
        </Link>
        <Link onClick={() => Scroll("contato")} href="#" alt="">
          Contato
        </Link>
      </NavItens>
      <ButtonContent>
        <Button variant={navMobile}>Reservas</Button>
      </ButtonContent>
      <ButtonHamburguerContent onClick={() => onClick(setCount)}>
        <ButtonHamburguer setCount={setCount} />
      </ButtonHamburguerContent>
      <MenuMobile count={count}>
        <LinkMobile href="#" alt="">
          Início
        </LinkMobile>
        <LinkMobile href="#" alt="">
          Suites
        </LinkMobile>
        <LinkMobile href="#" alt="">
          O Motel
        </LinkMobile>
        <LinkMobile href="#" alt="">
          Cortesias
        </LinkMobile>
        <LinkMobile  href="#" alt="">
          Localização
        </LinkMobile>
        <LinkMobile href="#" alt="">
          Contato
        </LinkMobile>
      </MenuMobile>
    </NavBar>
  );
};

export default Header;
