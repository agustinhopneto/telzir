import styled, { css } from 'styled-components';

interface Props {
  isFocused: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  min-width: 280px;
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
`;

export const SelectGroup = styled.div<Props>`
  display: flex;
  flex-direction: row;

  select {
    border-radius: 8px 0 0 8px;
    border: 2px solid #ccc;
    border-right: 0;
    height: 54px;
    padding: 0 12px;
    appearance: none;
    flex: 1;

    ${({ isFocused }) =>
      isFocused &&
      css`
        transition: all 0.5s;
        border-color: #7209b7;
      `}
  }

  div {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;

    border-radius: 0 8px 8px 0;

    background-color: #ccc;

    ${({ isFocused }) =>
      isFocused &&
      css`
        transition: all 0.5s;
        background-color: #7209b7;
      `}
  }
`;
