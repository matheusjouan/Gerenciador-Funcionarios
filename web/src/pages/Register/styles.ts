import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 500px;

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .form-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
`;
