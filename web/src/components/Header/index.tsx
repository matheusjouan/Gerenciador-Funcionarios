import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <header>
      <img src={logo} alt="Logo Empresa" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Cadastro Funcionário</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
