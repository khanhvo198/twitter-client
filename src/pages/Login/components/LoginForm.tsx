import { Button, TextField } from "@mui/material";
import { withFormik } from 'formik';
import { FC, ReactElement, useState } from "react";

interface FormValues {
  email: string,
  password: string
}

interface FormProps {
  email?: string,
  password?: string
}



const Form: FC = (props: any): ReactElement => {

  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;


  const [message, setMessage] = useState<string>("")
  // const classes = useLoginStyle()
  return (
    <form>
      <TextField 
        label="Email"
        variant="outlined"
        type="email"
        helperText = {message}
        style={{width: "75%"}}
        color="primary"
        id="email"
      ></TextField>
      <TextField 
        label="Password"
        type="password"
        variant="outlined"
        helperText = {message}
        style={{width: "75%"}}
        color="primary"
        id="password"
      ></TextField>

      <Button 
        variant="contained" 
        color='primary'
        size="large"
      >
        Log in
      </Button>
    </form>
  )
}

const LoginForm = withFormik<FormProps,FormValues>({
  mapPropsToValues: ({
    email,
    password
  }) => {
    return {
      email: email || "",
      password: password || ""
    }
  },
  handleSubmit: () => {
    
  }
})(Form)


export default LoginForm