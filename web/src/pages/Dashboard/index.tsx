import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { FiTrash2, FiEdit, FiEye } from 'react-icons/fi';
import api from '../../services/api';

import { useToast } from '../../context/ToastContext';

import Header from '../../components/Header';
import ModalShowUser from '../../components/ModalShowUser';
import ModalEditUser from '../../components/ModalEditUser';

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
  const [modalShowOpen, setModalShowOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  const [infoUser, setInfoUser] = useState({} as IUserData);

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

  const handleEditForm = useCallback(
    async (item: IUserData) => {
      try {
        const response = await api.put(`/users/${item.id}`, item);

        setUsers(users.map(usr => (usr.id === item.id ? response.data : usr)));

        addToast({
          type: 'success',
          title: 'Funcionário Cadastrado com sucesso',
        });
      } catch (err) {
        console.log(err);
      }
    },
    [addToast, users],
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/users');

      setUsers(response.data);
    }

    loadData();
  }, []);

  // Abetura do Modal
  const toggleShowModal = useCallback(() => {
    setModalShowOpen(!modalShowOpen);
  }, [modalShowOpen]);

  const toggleEditModal = useCallback(() => {
    setModalEditOpen(!modalEditOpen);
  }, [modalEditOpen]);

  // O que acontece ao clicar no botão da ação
  // data => dados vindo do modal
  const setShowUser = useCallback(
    data => {
      toggleShowModal();
      setInfoUser(data);
    },
    [toggleShowModal],
  );

  // data => dados vindo do modal
  const setEditUser = useCallback(
    data => {
      toggleEditModal();
      setInfoUser(data);
    },
    [toggleEditModal],
  );

  return (
    <>
      <Header />
      <ModalShowUser
        isOpen={modalShowOpen}
        setIsOpen={toggleShowModal}
        userData={infoUser}
      />

      <ModalEditUser
        isOpen={modalEditOpen}
        setIsOpen={toggleEditModal}
        userData={infoUser}
        handleEditForm={handleEditForm}
      />

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
                    <Button className="info" onClick={() => setShowUser(user)}>
                      <FiEye />
                    </Button>

                    <Button className="edit" onClick={() => setEditUser(user)}>
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
