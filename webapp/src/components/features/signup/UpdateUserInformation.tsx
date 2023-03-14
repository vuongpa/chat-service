import { Box, Grid, Button } from '@mui/material';
import { useYupValidationResolver } from 'common/hook';
import { validationSchemaUtils } from 'common/validation';
import CTextField from 'components/atoms/CTextField';
import CPassword from 'components/shared/CPassword';
import { useForm } from 'react-hook-form';
import { object } from 'yup';

export const UpdateUserInformation = () => {
  const validationSchema = object({
    email: validationSchemaUtils.email,
  });
  const resolver = useYupValidationResolver(validationSchema);
  const { control, handleSubmit } = useForm({ resolver });

  const onSubmit = () => {
    
  };
  
  return (
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
      >Cập nhật</Button>
    </Box>
  );
};