import styled from 'styled-components';
import { DatePicker } from 'antd';

export const MoviePhoto = styled.div`
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 10px;
  height: 400px;
`;
export const Title = styled.div`
  width: 300px;
  justify-content: center;
  text-align: center;
  margin: 0;
  font-size: 25px;
  position: absolute;
  right: 10px;
  font-weight: bold;
  top: 30px;
  color: rgb(0, 0, 0);
`;

export const Desc = styled.div`
  position: absolute;
  font-size: 20px;
  width: 300px;
  justify-content: center;
  text-align: center;
  right: 10px;
  top: 100px;
`;
export const DescMovie = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  width: 300px;
  right: 10px;
  top: 150px;
`;

export const PickerDate = styled(DatePicker)`
  position: absolute;
  left: 150px;
  top: 310px;
`;
export const Hour = styled.div`
  position: absolute;
  left: 120px;
  font-weight: bold;
  font-size: 20px;
  top: 350px;
`;
export const Info = styled.div`
  position: absolute;
  left: 80px;
  top: 280px;
`;
export const LoadDiv = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;
