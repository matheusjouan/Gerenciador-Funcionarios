import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import { useToast } from '../../context/ToastContext';

import getValidationErrors from '../../util/getValidationErrors';
import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

interface IRegisterData {
  name: string;
  surname: string;
  birth: Date;
  responsability: string;
  salary: number;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IRegisterData) => {
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

        await api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Cadastro Realizado',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro ao realizar cadastro, tente novamente',
        });
      }
    },
    [history, addToast],
  );

  return (
    <>
      <Header />
      <Container>
        <h1>Cadastro de Funcionário</h1>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="name" label="Nome:" placeholder="Digite o nome" />
          <Input
            name="surname"
            label="Sobrenome:"
            placeholder="Digite o sobrenome"
          />
          <Input
            name="responsability"
            label="Cargo:"
            placeholder="Digite o cargo"
          />
          <div className="form-group">
            <Input
              type="number"
              min="1"
              step="any"
              name="salary"
              label="Salário (R$):"
              placeholder="Digite o salário"
            />
            <Input name="birth" type="date" label="Data de Nascimento:" />
          </div>

          <div className="actions">
            <Button typeOfButton="voltar" onClick={() => history.goBack()}>
              Voltar
            </Button>
            <Button type="submit" typeOfButton="success">
              Cadastrar
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Register;
