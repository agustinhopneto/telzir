import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;

  h1 {
    color: #fdfdfd;
    font-weight: normal;
    margin-bottom: 4px;
  }

  h2 {
    color: #fdfdfd;
    font-weight: lighter;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
