import styled from "styled-components";

const Button3 = styled.button`
  display: flex;
  width: ${(props) => props.width || "auto"};
  justify-content: center;
  align-items: center;
  padding: 11px 22px;
  background: ${(props) => {
    if (props.background) {
      return props.background;
    }
    if (props.theme && props.theme.background) {
      return props.theme.background;
    }
    return "black";
  }};
  color: ${(props) => {
    if (props.color) {
      return props.color;
    }
    if (props.theme && props.theme.color) {
      return props.theme.color;
    }
    return "white";
  }};
  border: ${(props) => {
    if (props.border) {
      return props.border;
    }
    return "none";
  }};
  border-radius: ${(props) => {
    if (props.borderRadius) {
      return props.borderRadius;
    }
    return "5px";
  }};
  cursor: pointer;
`;

export default Button3;
