import { Box, Grid, Button } from '@mui/material';
import { useYupValidationResolver } from 'common/hook';
import { validationSchemaUtils } from 'common/validation';
import CEmail from 'components/shared/CEmail';
import { useForm } from 'react-hook-form';
import { object } from 'yup';

export const SignUpByEmail = ({ setActiveStep }: {setActiveStep: React.Dispatch<React.SetStateAction<number>>}) => {
  const validationSchema = object({
    email: validationSchemaUtils.email,
  });
  const resolver = useYupValidationResolver(validationSchema);
  const { control, handleSubmit } = useForm({ resolver });

  const onSubmit = () => {
    
  };
  
  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <CEmail control={control} />
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
          >Đăng nhập</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
          >Tiếp theo</Button>
        </Grid>
      </Grid>
    </Box>
  );
};