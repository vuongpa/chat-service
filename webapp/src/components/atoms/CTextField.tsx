import { TextField, TextFieldProps } from '@mui/material';
import { Controller, ControllerProps } from 'react-hook-form';
import React from 'react';

export type CTextFieldProps = Omit<ControllerProps, 'render' | 'name'> & {
  componentProps?: TextFieldProps;
  name?: string;
}

export default function CTextField(props: CTextFieldProps) {
  const { componentProps, name = '', ...controllerProps } = props;
  return <Controller {...{
    ...controllerProps,
    name,
    render: ({ field, fieldState }) => {
      const { value, onChange } = field;
      const { error } = fieldState;
      return (
        <TextField
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error?.message || `${componentProps?.label} là bắt buộc` : null}
          {...componentProps}
        />
      );
    },
  }} />;
}