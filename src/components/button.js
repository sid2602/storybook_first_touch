import styled, { css } from "styled-components";

export const Button = ({ isLoading = false, children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {isLoading ? <div>loading...</div> : children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: white;
  color: black;
  font-weight: bold;
  border: 1px solid black;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;

  ${({ primary }) =>
    primary &&
    css`
      background-color: #0085cf;
      border: 1px solid #0085cf;
      color: white;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}


    ${({ disabled }) =>
    disabled &&
    css`
      cursor: inherit;
      opacity: 40%;
    `}
`;
