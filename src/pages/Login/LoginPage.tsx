import { Grid } from "@mui/material";
import React, { FC, ReactElement } from "react";
import LoginForm from "./components/LoginForm";
import { useLoginStyle } from "./style";

const LoginPage: FC = (): ReactElement => {

  const classes = useLoginStyle();

  return(
    <React.Fragment>
      <Grid container justifyContent="center" alignItems="center" className={classes.wrapper}>
        <Grid
          item
          xs={10} md={6}
          className={classes.wrapperBox}
          justifyContent="center"
          alignItems="center"
        >
        <LoginForm />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default LoginPage


