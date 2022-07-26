import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Grid, Stack, TextField } from "@mui/material";
import React, { FC, ReactElement, useState } from "react";
import { useLoginStyle } from "./style";

const LoginPage: FC = (): ReactElement => {
  const [err, setErr] = useState<boolean>(true)

  const [message, setMessage] = useState<string>("")


  const handleClick = () : void => {
    if(err) {
      setMessage("")
    } else {
      setMessage("Sai rồi kìa pa")
    }
    setErr(!err)
  }


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
              helperText = {message}
              style={{width: "75%"}}
              color="primary"

            ></TextField>
            <TextField 
              label="Password"
              type="password"
              variant="outlined"
              helperText = {message}
              style={{width: "75%"}}
              color="primary"
            ></TextField>

            <Button 
              variant="contained" 
              color='primary'
              onClick={handleClick}
              className={classes.buttonLogin}
              size="large"
              >
              Log in
            </Button>
            <span>Don't have an account. <span className={classes.signupText}>Sign up</span> </span>
          </Stack>
        </Grid>
      </Grid>


    </React.Fragment>
  )

} 
export default LoginPage


