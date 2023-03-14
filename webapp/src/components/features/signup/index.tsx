import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { SignUpByEmail } from './SignUpByEmail';
import { UpdateUserInformation } from './UpdateUserInformation';

export default function SignUp() {
  const [activeStep, setActiveStep] = useState<number>(1);

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

        <Box sx={{ mt: 3 }}>
          {activeStep === 1 && (
            <SignUpByEmail setActiveStep={setActiveStep} />
          )}
          {activeStep === 2 && (
            <UpdateUserInformation />
          )}
        </Box>
      </Box>
    </Container>
  );
}