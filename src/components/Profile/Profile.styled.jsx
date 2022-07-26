import styled from '@emotion/styled';

export const ContainerProfile = styled.div``;

export const Description = styled.div`
  display: block;
  width: 500px;
  height: auto;
  background: white;
  margin: 0 auto;
  padding-top: 40px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 300px;
  background-color: lavender;
  border-radius: 50px;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.25);
`;

export const NameUser = styled.p`
  font-size: 18px;
  color: #333333;
  font-weight: 700;
  margin-top: 30px;
`;

export const Tag = styled.p`
  font-size: 18px;
  margin-top: 30px;
`;

export const Location = styled.p`
  font-size: 15px;
  color: #696969;
  font-weight: 500;
  margin-top: 30px;
`;

export const Stat = styled.ul`
  display: flex;
  font-size: 18px;
  text-align: center;
  background-color: lavender;
`;

export const StatList = styled.li`
  list-style: none;
  padding: 20px;
  ju &:not(:last-child) {
    border-right: 1px solid #696969;
  }
`;

export const StatItem = styled.span`
  color: tomato;
`;
