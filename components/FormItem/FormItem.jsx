import React from 'react';
import { node, string, bool, object } from 'prop-types';
import { Form } from 'antd';

const { Item } = Form;

const helpText = ({ error, touched }, help) => (error && touched ? error : help);

const validate = ({ touched, error, submitting }) => {
  if (touched && error) {
    return 'error';
  }

  if (submitting) {
    return 'validating';
  }

  return 'success';
};

const FormItem = ({ children, className, colon, help, label, meta, style }) => {
  return (
    <Item
      colon={colon}
      className={className}
      help={helpText(meta, help)}
      label={label}
      style={style}
      validateStatus={validate(meta)}
    >
      {children}
    </Item>
  );
};

FormItem.propTypes = {
  children: node.isRequired,
  className: string,
  colon: bool,
  help: string,
  label: string,
  meta: object.isRequired,
  style: object,
  validateStatus: string,
};

export default FormItem;
