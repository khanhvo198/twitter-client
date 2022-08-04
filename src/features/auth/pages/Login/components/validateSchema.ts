import * as yup from 'yup';

export const validateSchema = {
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must contain at least 8 character')
    .required('Enter your password'),
};
