import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Main, Header } from './styles';

import Card from '../../components/Card';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Conheça os novos planos FaleMais!</h1>
        <h2>Mais minutos para falar sem pagar por eles!</h2>
      </Header>

      <Main>
        <Card
          headerColor="#F72585"
          description="Fale por 30 minutos"
          title="FaleMais 30"
        >
          <Button type="button">
            <Link to="/simulation">Simular</Link>
          </Button>
        </Card>

        <Card
          headerColor="#3A0CA3"
          description="Fale por 60 minutos"
          title="FaleMais 60"
        >
          <Button type="button">
            <Link to="/simulation">Simular</Link>
          </Button>
        </Card>

        <Card
          headerColor="#7209B7"
          description="Fale por 120 minutos"
          title="FaleMais 120"
        >
          <Button type="button">
            <Link to="/simulation">Simular</Link>
          </Button>
        </Card>
      </Main>
    </Container>
  );
};

export default Home;
