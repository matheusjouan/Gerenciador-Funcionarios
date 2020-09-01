import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 500px;

  h1 {
    font-size: 28px;
    margin: 20px 0px;
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
  }
`;

export const UserInfo = styled.div`
  span {
    display: block;
  }

  .userData {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    background: #e6e6f0;
    border: 1px solid #e6e6f0;
    outline: 0;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
