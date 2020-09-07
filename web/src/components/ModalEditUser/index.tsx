import React, { useRef, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import { useToast } from '../../context/ToastContext';

import getValidationErrors from '../../util/getValidationErrors';

import Input from '../Input';
import Button from '../Button';

import { Container } from './styles';
import Modal from '../Modal';

interface IUserData {
  id: string;
  name: string;
  surname: string;
  birth: string;
  responsability: string;
  salary: number;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  userData: IUserData;
  handleEditForm: (user: IUserData) => void;
}

const ModalEditProfile: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  userData,
  handleEditForm,
}) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IUserData) => {
      try {
        formRef.current?.setErrors({});

        const schema = await Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          surname: Yup.string().required('Sobrenome obrigatório'),
          responsability: Yup.string().required('Cargo obrigatório'),
          salary: Yup.string().required('Salário obrigatório'),
          birth: Yup.string().required('Data obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        handleEditForm({
          ...data,
          id: userData.id,
        });

        setIsOpen();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro ao atualizar o cadastro, tente novamente',
        });
      }
    },
    [addToast, setIsOpen, handleEditForm, userData],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h1>Editar Dados de Cadastro</h1>

        <Form onSubmit={handleSubmit} ref={formRef} initialData={userData}>
          <Input name="name" label="Nome" placeholder="Digite o nome" />
          <Input
            name="surname"
            label="Sobrenome"
            placeholder="Digite o sobrenome"
          />
          <Input
            name="responsability"
            label="Cargo"
            placeholder="Digite o cargo"
          />
          <div className="form-group">
            <Input
              type="number"
              min="1"
              step="any"
              name="salary"
              label="Salário (R$)"
              placeholder="Digite o salário"
            />
            <Input name="birth" type="date" label="Data de Nascimento" />
          </div>

          <div className="actions">
            <Button typeOfButton="voltar" onClick={setIsOpen}>
              Fechar
            </Button>
            <Button type="submit" typeOfButton="edit">
              Editar
            </Button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalEditProfile;
