import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { useToast } from '../../context/ToastContext';

import { Container, UserInfo } from './styles';
import api from '../../services/api';

interface IUserData {
  name: string;
  surname: string;
  birth: Date;
  responsability: string;
  salary: number;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState({} as IUserData);
  const history = useHistory();

  const { addToast } = useToast();

  const { id } = useParams();

  const handleDelete = useCallback(
    async (userId: string) => {
      try {
        await api.delete(`users/${userId}`);

        addToast({
          type: 'success',
          title: 'Cadastro removido com sucesso',
        });

        history.push('/');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao remover o cadastro, tente novamente',
        });
      }
    },
    [history, addToast],
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`users/${id}`);

      setUser(response.data);
    }
    loadData();
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <h1>Dados do Funcionário</h1>

        <UserInfo>
          <span>Nome:</span>
          <span className="userData">{user.name}</span>

          <span>Sobrenome:</span>
          <span className="userData">{user.surname}</span>

          <span>Cargo:</span>
          <span className="userData">{user.responsability}</span>

          <div className="form-group">
            <div className="field">
              <span>Salário (R$):</span>
              <span className="userData">{user.salary}</span>
            </div>

            <div className="field">
              <span>Data Nascimento:</span>
              <span className="userData">{user.birth}</span>
            </div>
          </div>
        </UserInfo>

        <div className="actions">
          <Button typeOfButton="voltar" onClick={() => history.goBack()}>
            Voltar
          </Button>
          <Button
            typeOfButton="edit"
            onClick={() => history.push(`edit/${id}`)}
          >
            Editar
          </Button>
          <Button typeOfButton="delete" onClick={() => handleDelete(id)}>
            Excluir
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Profile;
