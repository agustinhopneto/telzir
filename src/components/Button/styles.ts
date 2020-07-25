import styled from 'styled-components';

export const Container = styled.button`
  background: linear-gradient(102.63deg, #3a0ca3 0%, #4361ee 100%);
  padding: 0 20px;
  height: 54px;
  color: #fdfdfd;
  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;

  font-size: 22px;
  font-weight: 300;
  line-height: 18px;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  }

  a {
    text-decoration: none;
    color: #fdfdfd;
  }
`;
