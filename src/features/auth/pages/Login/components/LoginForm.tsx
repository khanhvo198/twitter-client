import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Grid, Stack, TextField } from "@mui/material";
import { Form, Formik } from 'formik';

import * as yup from "yup";
import { useAppDispatch } from '../../../../../app/hooks';
import { LoginPayload, signIn } from '../../../authSlice';
import { useLoginStyle } from "../style";
import { validateSchema } from './validateSchema';


interface FormValues {
  email: string,
  password: string
}

interface FormProps {
  initialEmail?: string,
}

const LoginForm = () => {

  const classes = useLoginStyle()
  const dispatch = useAppDispatch()



  const handleSubmit: any = ( values: any, { setSubmitting }: any ) => {
    setTimeout(() => {
      console.log(values)
      const user: LoginPayload = {
        email: values.email,
        password: values.password
      }
      dispatch(signIn(user))
      setSubmitting(false)  
    }, 2000);
    
  }

  const init = {
    email: '',
    password: ''
  }

  return (
    <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        className={classes.wrapper}
      >
        <Grid
          item
          xs={10} md={6}
          className={classes.wrapperBox}
          justifyContent="center"
          alignItems="center"
        >
          <Formik 
            style={{ width: "100%", height: "100%"}}
            initialValues={init}
            validationSchema={yup.object().shape(validateSchema)}
            onSubmit = {handleSubmit}
            >
              {
                formikProps => {
                  const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                  } = formikProps;

                  return (
                    <Form style={{height: "100%"}}>
                    <Stack 
                    spacing={3}
                    justifyContent="center"
                    alignItems="center" 
                    className={classes.stackHeight}
                  >
                    <TwitterIcon
                      style={{color: "black", fontSize: "2.5rem"}}
                    />
                    <h1
                      className={classes.twitterWelcome}
                    >Sign in to Twitter</h1>
                      <TextField 
                        label="Email"
                        variant="outlined"
                        type="email"
                        style={{width: "75%"}}
                        color="primary"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email ? errors.email : ""}
                        name="email"
                        value={values.email}
                      ></TextField>
                      <TextField 
                        label="Password"
                        type="password"
                        variant="outlined"
                        style={{width: "75%"}}
                        color="primary"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password ? errors.password : ""}
                        name="password"
                        value={values.password}
                      ></TextField>
      
                      <Button 
                        variant="contained" 
                        color='primary'
                        size="large"
                        type="submit"
                        disabled={isSubmitting}
                        className={classes.buttonLogin}
                      >
                        Log in
                      </Button>
                    <span>Don't have an account. <span className={classes.signupText}>Sign up</span> </span>
                    </Stack>
                    </Form>
                  )
                }
              }
          </Formik>
        </Grid>
      </Grid>
  )
}

// const LoginForm = withFormik<FormProps,FormValues>({
//   mapPropsToValues: ({
//     initialEmail
//   }) => {
//     return {
//       email: initialEmail || "",
//       password: ""
//     }
//   },
//   validationSchema: yup.object().shape(validateSchema),
//   handleSubmit: (values, { setSubmitting }) => {
//     setTimeout(() => {
//       // dispatch(signIn({
//       //   email: values.email,
//       //   password: values.password
//       // }))
//       console.log(values)
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 1000)
//   }
// })(InnerForm)


export default LoginForm