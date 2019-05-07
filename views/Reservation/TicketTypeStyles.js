import styled from 'styled-components';
import { Icon } from 'antd';

export const TicketRow = styled.div`
  display: flex;
  margin: 10px;
`;

export const AddIcon = styled(Icon)`
  font-size: 30px;
  margin: 10px;
`;

export const Row = styled.div`
  display: flex;
  width: 20vh;
`;

export const RowEnd = styled(Row)`
  display: flex;
  justify-content: flex-end;
`;
