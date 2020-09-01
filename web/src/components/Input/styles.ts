import styled from 'styled-components';

export const Container = styled.div`
  &:nth-last-child(1) {
    margin-top: 0px;
  }

  & + div {
    margin-top: 20px;
  }

  input {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    background: #e6e6f0;
    border: 1px solid #e6e6f0;
    outline: 0;
    padding: 10px;
    margin-bottom: 5px;

    &[type='date'] {
      color: #7a7a7a;
    }

    &[type='date']:focus {
      color: #3a3a3a;
    }
  }
`;

export const Error = styled.span`
  color: red;
`;
