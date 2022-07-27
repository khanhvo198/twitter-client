import { Button, TextField } from "@mui/material";
import { Form, FormikProps, withFormik } from 'formik';
import { useState } from "react";
import * as yup from "yup";
import { validateSchema } from "./validateSchema";



interface FormValues {
  email: string,
  password: string
}

interface FormProps {
  initialEmail?: string,
}

const InnerForm = (props: FormikProps<FormValues>) => {

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  console.log(props)

  const [message, setMessage] = useState<string>("")
  // const classes = useLoginStyle()
  return (
    <Form>
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
      >
        Log in
      </Button>
    </Form>
  )
}





const LoginForm = withFormik<FormProps,FormValues>({
  mapPropsToValues: ({
    initialEmail
  }) => {
    return {
      email: initialEmail || "",
      password: ""
    }
  },
  validationSchema: yup.object().shape(validateSchema),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      console.log(values)
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000)
  }
})(InnerForm)


export default LoginForm