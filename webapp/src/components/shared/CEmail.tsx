import CTextField, { CTextFieldProps } from '../atoms/CTextField';
import React from 'react';

export default function CEmail(props: CTextFieldProps) {
  const { componentProps, ...controllerProps } = props;
  return (
    <CTextField {...{
      rules: {
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'vui lòng nhập địa chỉ email chính xác',
        },
      },
      ...controllerProps,
      name: 'email',
      componentProps: {
        margin: 'normal',
        fullWidth: true,
        autoFocus: true,
        required: true,
        ...componentProps,
        autoComplete: 'email',
        id: 'email',
        label: 'Email',
      },
    }} />
  );
}