import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const TableContainer = styled.section`
  position: relative;
  margin-top: 64px;
  border: 1px solid #7a7a7a;
  padding: 20px;

  h1 {
    margin: 20px 0;
  }

  thead {
    margin: 0 auto;
  }

  table {
    width: 100%;
    border-spacing: 0 10px;

    th {
      color: #fff;
      text-align: left;
      padding: 20px 32px;
      line-height: 24px;
      background: #3a3a3a;
    }

    td {
      text-align: left;
      padding: 20px 32px;
      background: #fff;
      color: #3a3a3a;
      border-bottom: 1px solid #7a7a7a;

      /* a {
        color: #3a3a3a;
        border: 1px solid;
        padding: 5px 5px;
        border-radius: 6px;
        border: 0;

        & + a {
          margin-left: 10px;
        }

        &.trash {
          background: #c53030;
          color: #fff;
        }

        &.info {
          background: #000080;
          color: #fff;
        }

        &.edit {
          background: #ffbf00;
          color: #fff;
        }
      } */
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    max-width: 220px;
    padding: 10px 8px;
    color: #fff;
    background: #0000ff;
    border: 0;
    border-radius: 8px;

    font-size: 14px;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  color: #3a3a3a;
  border: 1px solid;
  padding: 5px 5px;
  border-radius: 6px;
  border: 0;

  & + button {
    margin-left: 10px;
  }

  &.trash {
    background: #c53030;
    color: #fff;
  }

  &.info {
    background: #000080;
    color: #fff;
  }

  &.edit {
    background: #ffbf00;
    color: #fff;
  }
`;
