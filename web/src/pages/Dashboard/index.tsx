import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiTrash2, FiEdit, FiEye } from 'react-icons/fi';
import api from '../../services/api';

import { useToast } from '../../context/ToastContext';

import Header from '../../components/Header';

import { Container, TableContainer, Button } from './styles';

interface IUserData {
  id: string;
  name: string;
  surname: string;
  birth: string;
  salary: number;
  responsability: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUserData[]>([]);

  const history = useHistory();
  const { addToast } = useToast();

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await api.delete(`users/${id}`);

        addToast({
          type: 'success',
          title: 'Cadastro removido com sucesso',
        });

        setUsers(users.filter(user => user.id !== id));
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao remover o cadastro, tente novamente',
        });
      }
    },
    [users, addToast],
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/users');

      setUsers(response.data);
    }

    loadData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TableContainer>
          <h1>Lista de Funcionários</h1>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.responsability}</td>

                  <td>
                    <Button
                      className="info"
                      onClick={() => history.push(`users/${user.id}`)}
                    >
                      <FiEye />
                    </Button>

                    <Button
                      className="edit"
                      onClick={() => history.push(`users/edit/${user.id}`)}
                    >
                      <FiEdit />
                    </Button>

                    <Button
                      className="trash"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FiTrash2 />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <Link to="/register">Cadastrar Funcionário</Link>
          </div>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
