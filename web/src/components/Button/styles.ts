import styled, { css } from 'styled-components';

interface ButtonProps {
  typeOfButton?: 'voltar' | 'edit' | 'delete' | 'success';
}

const buttonTypeVariations = {
  voltar: css`
    background: #000080;
    color: #fff;
  `,

  edit: css`
    background: #ffbf00;
    color: #fff;
  `,

  delete: css`
    background: #c53030;
    color: #fff;
  `,

  success: css`
    background: #04ae28;
    color: #fff;
  `,
};

export const Container = styled.button<ButtonProps>`
  flex: 1;
  height: 40px;
  font-weight: bold;
  border: 0;
  border-radius: 8px;
  color: #fff;
  ${props => buttonTypeVariations[props.typeOfButton || 'voltar']}

  & + button {
    margin-left: 20px;
  }

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
