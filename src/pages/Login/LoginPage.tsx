import React, { FC, ReactElement } from "react";
import LoginForm from "./components/LoginForm";
import { useLoginStyle } from "./style";

const LoginPage: FC = (): ReactElement => {

  const classes = useLoginStyle();

  return(
    <React.Fragment>
        <LoginForm />
    </React.Fragment>
  )
}

export default LoginPage


