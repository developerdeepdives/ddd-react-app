import React from "react";
import {
  Button,
  FormControl,
  InputAdornment,
  IconButton,
  TextField,
  InputLabel,
  OutlinedInput,
  Link,
} from "@material-ui/core";
import styled from "styled-components";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { emailValidator } from "../utils/validators";
import axios from "../utils/axios";
import { AuthToken } from "../utils/authToken";

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2rem auto;
  height: 220px;
  justify-content: space-between;
`;

const ActionButton = styled(Button)`
  font-weight: 700;
`;
const RegisterButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem auto;
  max-width: 300px;
`;

const RegisterLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export default () => {
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    event.preventDefault();
    if (!emailValidator(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    const jwt = (
      await axios.post("/user/login", {
        email,
        password,
      })
    ).data;
    AuthToken.storeToken(jwt.token);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError("");
  };

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  return (
    <>
      <LoginContainer
        onKeyPress={(e) => {
          e.key === "Enter" ? handleSubmit() : null;
        }}
      >
        <TextField
          error={!!emailError}
          helperText={emailError}
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChangeEmail}
        />
        <FormControl variant="outlined" error={!!passwordError}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => setShowPassword((prev) => !prev)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <ActionButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          LOGIN
        </ActionButton>
      </LoginContainer>
      <RegisterButtonWrapper>
        <p>Are you new?</p>
        <RegisterLink href={"/register"}>
          <ActionButton variant="contained" color="secondary">
            REGISTER
          </ActionButton>
        </RegisterLink>
      </RegisterButtonWrapper>
    </>
  );
};
