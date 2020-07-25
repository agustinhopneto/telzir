import styled from 'styled-components';

interface ContainerProps {
  headerColor: string;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 16px;
  flex: 1;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: #fdfdfd;
  min-width: 280px;
  margin-bottom: 16px;

  @media (min-width: 600px) {
    & + div {
      margin-left: 32px;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ headerColor }) => headerColor};
    padding: 30px;
    line-height: 36px;

    border-radius: 16px 16px 0 0;

    h3 {
      color: #fdfdfd;
      font-size: 32px;
    }
  }
`;

export const Info = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 36px;

    p {
      margin-left: 12px;
      font-size: 22px;
      line-height: 22px;
    }
  }
`;
