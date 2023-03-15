import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { AnyObject, object } from 'yup';
import { omit } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { setTokenToCookies } from 'common/auth';
import { useYupValidationResolver } from 'common/hook';
import { validationSchemaUtils } from 'common/validation';
import CTextField from 'components/atoms/CTextField';
import { formUtils } from 'utils/form-utils';
import CEmail from 'components/shared/CEmail';
import CPassword from 'components/shared/CPassword';

export default function SignUpPage() {
  const validationSchema = object({
    email: validationSchemaUtils.email,
    password: validationSchemaUtils.password,
    rePassword: validationSchemaUtils.rePassword,
  });
  const resolver = useYupValidationResolver(validationSchema);
  const { control, handleSubmit } = useForm({ resolver });
  const navigate = useNavigate();

  const onSubmit = (data: AnyObject) => {
    formUtils.submitForm({
      method: 'POST',
      endpoint: '/auth/signup',
      onGotSuccess: response => {
        setTokenToCookies(response.data);
        // navigate('/');
      },
      notify: true,
      successMessage: 'Đăng ký thành công',
      modifyDataBeforeSubmit: formValue => {
        return omit(formValue, 'rePassword');
      },
    }, data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng ký
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CTextField {...{
                name: 'firstName',
                control,
                rules: { required: true },
                componentProps: {
                  autoFocus: true,
                  fullWidth: true,
                  autoComplete: 'given-name',
                  id: 'firstName',
                  label: 'Họ và tên đệm',
                  required: true,
                },
              }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CTextField {...{
                name: 'lastName',
                control,
                rules: { required: true },
                componentProps: {
                  autoFocus: true,
                  fullWidth: true,
                  autoComplete: 'given-name',
                  id: 'lastName',
                  label: 'Tên',
                  required: true,
                },
              }} />
            </Grid>
            <Grid item xs={12}>
              <CEmail control={control} />
            </Grid>
            <Grid item xs={12}>
              <CPassword control={control} />
            </Grid>
            <Grid item xs={12}>
              <CPassword componentProps={{ label: 'Nhập lại mật khẩu' }} name="rePassword" control={control} />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Đăng ký</Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">Bạn đã có tài khoản? Đăng nhập</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
