import React from 'react';

import Modal from '../Modal';
import Button from '../Button';

import { Container, UserInfo } from './styles';

interface IUser {
  name: string;
  surname: string;
  responsability: string;
  salary: number;
  birth: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  userData: IUser;
}

const ModalShowUser: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  userData,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h1>Dados do Funcionário</h1>

        <UserInfo>
          <span>Nome:</span>
          <span className="userData">{userData.name}</span>

          <span>Sobrenome:</span>
          <span className="userData">{userData.surname}</span>

          <span>Cargo:</span>
          <span className="userData">{userData.responsability}</span>

          <div className="form-group">
            <div className="field">
              <span>Salário (R$):</span>
              <span className="userData">{userData.salary}</span>
            </div>

            <div className="field">
              <span>Data Nascimento:</span>
              <span className="userData">{userData.birth}</span>
            </div>
          </div>
        </UserInfo>

        <div className="actions">
          <Button typeOfButton="voltar" onClick={setIsOpen}>
            Fechar
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalShowUser;
