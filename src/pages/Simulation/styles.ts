import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 450px) {
    padding: 20px;
  }
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
  padding: 20px;
  background-color: #fdfdfd;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 36px;

  header {
    margin-bottom: 36px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-bottom: 24px;

  input {
    margin-right: 8px;
  }

  button {
    margin-bottom: 12px;
  }
`;

export const Table = styled.table`
  th {
    padding: 10px;
  }

  td {
    padding: 10px 20px;
  }
`;
