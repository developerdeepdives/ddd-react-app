import React from "react";
import {
  Button,
  FormControl,
  InputAdornment,
  IconButton,
  TextField,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";
import styled from "styled-components";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { emailValidator, passwordValidator } from "../utils/validators";
import axios from "../utils/axios";
import { AuthToken } from "../utils/authToken";

const RegisterContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2rem auto;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  max-width: 300px;
`;
const RegisterButton = styled(Button)`
  font-weight: 700;
  width: 100%;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export default () => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    event.preventDefault();
    if (!emailValidator(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (!passwordValidator(password)) {
      setPasswordError(
        "Please enter a valid password. Minimum 8 characters with at least 1 uppercase, 1 lowercase, 1 digit and 1 special character."
      );
      return;
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required");
      return;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords are required to match.");
      return;
    }

    const jwt = (
      await axios.post("/user/register", {
        email,
        password,
        confirmPassword,
        bio,
        name,
      })
    ).data;
    AuthToken.storeToken(jwt.token);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError("");
  };

  const handleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleChangeBio = (e) => {
    const bio = e.target.value;
    setBio(bio);
  };

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;

    setPassword(newPassword);
    setPasswordError("");
  };

  const handleChangeConfirmPassword = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordError("");
  };

  return (
    <>
      <RegisterContainer
        onKeyPress={(e) => {
          e.key === "Enter" ? handleSubmit() : null;
        }}
      >
        <InputWrapper>
          <TextField
            error={!!emailError}
            helperText={emailError}
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleChangeEmail}
            fullWidth
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleChangeName}
            fullWidth
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            id="bio"
            label="Bio"
            variant="outlined"
            value={bio}
            multiline
            onChange={handleChangeBio}
            fullWidth
            rows={4}
          />
        </InputWrapper>
        <InputWrapper>
          <FormControl fullWidth variant="outlined" error={!!passwordError}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChangePassword}
              fullWidth
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
            <FormHelperText id="outlined-adornment-password">
              {passwordError}
            </FormHelperText>
          </FormControl>
        </InputWrapper>
        <FormControl variant="outlined" error={!!confirmPasswordError}>
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={(e) => setShowConfirmPassword((prev) => !prev)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={135}
          />
          <FormHelperText id="outlined-adornment-password">
            {confirmPasswordError}
          </FormHelperText>
        </FormControl>
        <ButtonWrapper>
          <RegisterButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Register
          </RegisterButton>
        </ButtonWrapper>
      </RegisterContainer>
    </>
  );
};
