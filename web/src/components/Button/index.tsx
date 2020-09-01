import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  typeOfButton?: 'voltar' | 'edit' | 'delete' | 'success';
};

const Button: React.FC<ButtonProps> = ({ children, typeOfButton, ...rest }) => (
  <Container type="button" typeOfButton={typeOfButton} {...rest}>
    {children}
  </Container>
);

export default Button;
