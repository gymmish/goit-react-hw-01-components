import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 20px;
  width: 700px;
  height: 700px;
  background-color: lavender;
  box-shadow: 0 5px 10px 2px rgb(0 0 0 / 25%);

  td {
    text-align: center;
    padding: 10px;
  }
  tr {
    background-color: white;
  }

  tr:nth-child(2n) {
    background-color: lavender;
  }
`;

export const TabelHead = styled.thead`
  height: 50px;
`;
