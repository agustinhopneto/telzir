/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback, useEffect, FormEvent } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Scrollbars } from 'react-custom-scrollbars';

import { Container, Header, Main, Form, Table } from './styles';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import {
  getPlansAndDdds,
  calculatePlan,
  ResultProps,
} from '../../utils/getData';

const Simulation: React.FC = () => {
  const [formData, setFormData] = useState({
    origin: '011',
    destination: '011',
    minutes: 0,
    plan: 'FaleMais 30',
  });

  const [ddds, setDdds] = useState<string[]>([]);
  const [plans, setPlans] = useState<string[]>([]);
  const [results, setResults] = useState<ResultProps[]>([]);

  useEffect(() => {
    const { plans: plansData, ddds: dddsData } = getPlansAndDdds();

    setPlans(plansData);
    setDdds(dddsData);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent): void => {
      event.preventDefault();

      if (formData.origin === formData.destination) {
        alert(
          'Ops... Algo não está certo..\nOrigem e destino não podem ser iguais!',
        );

        return;
      }

      const data = calculatePlan(formData);
      setResults([...results, data]);
    },
    [formData, results],
  );

  return (
    <Container>
      <Header>
        <h1>Simule agora e conheça nossas vantagens!</h1>
      </Header>
      <Main>
        <header>
          <h3>Simulação e comparação</h3>
        </header>

        <Form onSubmit={handleSubmit}>
          <Select
            value={formData.origin}
            onChange={(e) => {
              setFormData({ ...formData, origin: e.target.value });
            }}
            data={ddds}
            label="DDD Origem"
          />
          <Select
            value={formData.destination}
            onChange={(e) => {
              setFormData({ ...formData, destination: e.target.value });
            }}
            data={ddds}
            label="DDD Destino"
          />
          <Input
            value={formData.minutes}
            onChange={(e) => {
              setFormData({ ...formData, minutes: Number(e.target.value) });
            }}
            maxLength={10}
            label="Minutos"
          />
          <Select
            value={formData.plan}
            onChange={(e) => {
              setFormData({ ...formData, plan: e.target.value });
            }}
            data={plans}
            label="Plano FaleMais"
          />
          <Button>
            <FiPlus size={24} color="#fdfdfd" />
          </Button>
        </Form>
        <Scrollbars style={{ width: 'auto', height: 350 }}>
          <Table>
            <thead>
              <tr>
                <th>DDD Origem</th>
                <th>DDD Destino</th>
                <th>Minutos</th>
                <th>Plano FaleMais</th>
                <th>Com FaleMais</th>
                <th>Sem FaleMais</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr key={index}>
                  <td>{item.origin}</td>
                  <td>{item.destination}</td>
                  <td>{item.minutes}</td>
                  <td>{item.plan}</td>
                  <td>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.withPlan)}
                  </td>
                  <td>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.withoutPlan)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Scrollbars>
      </Main>
    </Container>
  );
};

export default Simulation;
