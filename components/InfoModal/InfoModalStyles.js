import styled from 'styled-components';
import { DatePicker } from 'antd';

export const FirstPart = styled.div`
  display: flex;
`;
export const MoviePhoto = styled.div`
  border-radius: 5px;
  margin-top: 10px;
`;
export const Title = styled.div`
  justify-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;
export const DescPart = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Desc = styled.div`
  font-size: 20px;
  justify-content: center;
  text-align: center;
`;
export const DescMovie = styled.div`
  justify-content: center;
  text-align: center;
  font-size: 12px;
  padding-left: 10px;
`;
export const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
`;

export const PickerDate = styled(DatePicker)`
  width: 50%;
  padding: 20px 0;
`;
export const Hour = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
export const LoadDiv = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;
