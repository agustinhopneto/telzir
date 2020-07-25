import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 12px;

  span {
    color: #ccc;
    margin-left: 12px;
    font-weight: 500;

    ${({ isFocused }) =>
      isFocused &&
      css`
        transition: all 0.5s;
        color: #7209b7;
      `}
  }

  input {
    border-radius: 8px;
    min-width: 200px;
    border: 2px solid #ccc;
    height: 54px;
    padding: 20px;

    ${({ isFocused }) =>
      isFocused &&
      css`
        transition: all 0.5s;
        border-color: #7209b7;
      `}
  }
`;
