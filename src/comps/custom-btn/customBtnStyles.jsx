import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #357ae8;
  color: white;
  margin-top: 1rem;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const logInStyles = css`
  background-color: #f0f7fe;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.isLogIn) {
    return logInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomBtnContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  background: #f0f7fe;
  border-radius: 5px;
  border: none;
  ${getButtonStyles}
`;

export const StyledLink = styled.a`
  font-size: 12px;
  padding: 15px;
  color: #729dc7;
`;
