import React from 'react';
import { Input } from 'antd';
import { string, object, bool, oneOf } from 'prop-types';
import FormItem from '../FormItem';

const InputItem = props => {
  return (
    <FormItem {...props}>
      <Input
        name={props.input.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.input.value}
        disabled={props.disabled || props.meta.submitting}
        onBlur={props.input.onBlur}
        onChange={props.input.onChange}
        onFocus={props.input.onFocus}
      />
    </FormItem>
  );
};

InputItem.propTypes = {
  placeholder: string,
  type: oneOf(['text', 'password', 'number']),
  input: object.isRequired,
  disabled: bool,
  meta: object.isRequired,
};

InputItem.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default InputItem;
