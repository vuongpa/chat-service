import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import React from 'react';
import ErrorPage from '../error-page';
import SignUpPage from './pages/signup';
import SignInPage from './pages/signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
]);
export default router;
