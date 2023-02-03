import React from "react";
import styled from "styled-components";

const backgroundColor = (variant) => {
  switch (variant) {
    case "primary":
      return "#7a7266";
    case "secondary":
      return "#5a493e";
    case "tertiary":
      return "#2A2A2A";
    case "menu":
      return "#FFFFFF";
      case "navMobile":
        return "#7A7266";
    default:
      return null;
  }
};

const Button = styled.button`
  background-color: ${(props) => backgroundColor(props.variant)};
  min-width: ${(props) => (props.variant === "menu" ? "100px" : "160px")};
  height: 41px;
  padding-inline: 30px;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.variant === "menu" ? "#2A2A2A" : null)};
`;

const BtnPrimary = ({ variant, children }) => {
  return <Button variant={variant}>{children}</Button>;
};

export default BtnPrimary;
