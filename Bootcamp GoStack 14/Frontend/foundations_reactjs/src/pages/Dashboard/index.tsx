import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form action="">
      <input type="text" placeholder="Digite aqui..." />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="/test">
        <img
          src="https://avatars0.githubusercontent.com/u/49538119?s=460&u=39a6291923942b4f7cc8fcb4bce259d116807701&v=4"
          alt="Leonardo"
        />

        <div>
          <strong>tdd</strong>
          <p>Test Development Drive</p>
        </div>

        <FiChevronRight size={20} />

      </a>

    </Repositories>
  </>
);

export default Dashboard;
