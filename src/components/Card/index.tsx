import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import { Container, Info } from './styles';

interface CardProps {
  description: string;
  headerColor: string;
  title: string;
}

const Card: React.FC<CardProps> = ({
  children,
  description,
  headerColor,
  title,
}) => {
  return (
    <Container headerColor={headerColor}>
      <header>
        <h3>{title}</h3>
      </header>
      <Info>
        <div>
          <FiCheckCircle size={36} color="#00C51F" />
          <p>{description}</p>
        </div>
        {children}
      </Info>
    </Container>
  );
};

export default Card;
