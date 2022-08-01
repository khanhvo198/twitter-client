import React, { FC, ReactElement } from "react";
import InnerForm from "./components/LoginForm";

const LoginPage: FC = (): ReactElement => {

  return(
    <React.Fragment>
        <InnerForm />
    </React.Fragment>
  )
}

export default LoginPage


