import styled from 'styled-components';
import { Button } from 'antd';

export const TicketDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  border: 3px black solid;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddButton = styled(Button)`
  margin: 10px;
  font-size: 12px;
`;
