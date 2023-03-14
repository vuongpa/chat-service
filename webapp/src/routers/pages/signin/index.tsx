import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { AnyObject, object } from 'yup';
import { useNavigate } from 'react-router-dom';
import { setTokenToCookies } from 'common/auth';
import { useYupValidationResolver } from 'common/hook';
import { validationSchemaUtils } from 'common/validation';
import CEmail from 'components/shared/CEmail';
import CPassword from 'components/shared/CPassword';
import { formUtils } from 'utils/form-utils';

export default function SignInPage() {
  const validationSchema = object({
    password: validationSchemaUtils.password,
    email: validationSchemaUtils.email,
  });
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm({ resolver });
  const navigate = useNavigate();
  
  const onSubmit = (data: AnyObject) => {
    formUtils.submitForm(data, {
      method: 'POST',
      endpoint: '/signin',
      onGotSuccess: response => {
        setTokenToCookies(response.data);
        navigate('/');
      },
      notify: true,
      successMessage: 'Đăng nhập thành công',
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Đăng nhập</Typography>
          
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <CEmail control={control} />
          <CPassword control={control} />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Ghi nhớ"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Đăng nhập</Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">Quên mật khẩu?</Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">Bạn chưa có tài khoản? Đăng ký</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}