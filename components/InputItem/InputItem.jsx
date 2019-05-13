import React from 'react';
import { Input } from 'antd';
import FormItem from '../FormItem';
import { string } from 'prop-types';

const InputItem = ({ text }) => {
  return(
    <Input placeholder={text} allowClear >
      <FormItem />
    </Input>
  );
}

InputItem.propTypes = { text: string }

export default InputItem;