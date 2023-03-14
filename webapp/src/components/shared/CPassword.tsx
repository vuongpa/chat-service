import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import CTextField, { CTextFieldProps } from '../atoms/CTextField';

export default function CPassword(props: CTextFieldProps) {
  const { componentProps, ...controllerProps } = props;
  const [show, setShow] = useState<boolean>(false);
  return (
    <CTextField {...{
      rules: {
        required: true,
      },
      name: 'password',
      ...controllerProps,
      componentProps: {
        margin: 'normal',
        fullWidth: true,
        autoFocus: true,
        required: true,
        autoComplete: 'password',
        id: 'password',
        label: 'Mật khẩu',
        type: show ? 'text' : 'password',
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShow(prev => !prev)}
                edge="end"
              >
                {show ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        },
        ...componentProps,
      },
    }} />
  );
}