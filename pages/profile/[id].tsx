import React, { useState } from "react";
import styled from "styled-components";
import Typing from "react-typist";
import Layout from "../../components/layout";
import { AuthProps, privateRoute } from "../../hoc/privatePage";
import Cookie from "js-cookie";
import axios from "../../utils/axios";
import { GetServerSideProps } from "next";
import { AuthToken } from "../../utils/authToken";
import { IconButton, Tooltip, TextField, Button } from "@material-ui/core";
import { emailValidator } from "../../utils/validators";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 120px;
  color: #ff4141;
  user-select: none;
`;

const Blue = styled.span`
  color: #15dcd1;
`;

const UserDetail = styled.h1`
  margin: 0 0 20px 20px;
`;
const UserDetailBrackets = styled.h1`
  margin: 0 0 20px 0;
`;

const MainWrapper = styled.div`
  display: flex;
  margin: 50px 0 50px 0;
`;
const Avatar = styled.img`
  width: 200px;
  height: auto;
`;

const EditPen = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px 20px 0 20px;
  cursor: pointer;
`;
const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px 100px 0 0;
`;

const Lead = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 800px) {
    margin: 15px;
    min-width: 0;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 420px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 420px;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params.id;
  const response = await axios.get(`/user/${userId}`);
  const userInfo = response.data;
  return {
    props: {
      userInfo,
    },
  };
};

interface Props extends AuthProps {
  userInfo: any;
}

const Home: React.FC<Props> = (props) => {
  const auth = new AuthToken(Cookie.get("token"));
  const [isEdittable, setIsEdittable] = useState(false);
  const { userInfo } = props;
  const [name, setName] = React.useState(userInfo.name);
  const [bio, setBio] = React.useState(userInfo.bio);

  const handleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleChangeBio = (e) => {
    const bio = e.target.value;
    setBio(bio);
  };

  const handleSubmit = async () => {
    event.preventDefault();

    const jwt = (
      await axios.put(`/user/${auth.decodedToken?.user?._id}`, {
        bio,
        name,
      })
    ).data;
    AuthToken.storeToken(jwt.token);
    setIsEdittable(false);
  };

  return (
    <Layout pageName="Profile">
      <Header>
        <Icon>
          {"<"}
          <Blue>/</Blue>
          {">"}
        </Icon>
        <Lead>
          <Typing>Profile...</Typing>
        </Lead>
      </Header>
      <MainWrapper>
        <AvatarWrapper>
          <Avatar alt="user avatar" src="/blank_avatar.png" />
        </AvatarWrapper>
        {isEdittable ? (
          <div>
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
            <ButtonWrapper>
              <Button onClick={() => setIsEdittable(false)}>Cancel</Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </ButtonWrapper>
          </div>
        ) : (
          <>
            <div>
              <UserDetailBrackets>const userProfile = {`{`}</UserDetailBrackets>
              <UserDetail>{`name: ${userInfo.name},`}</UserDetail>
              <UserDetail>{`email: ${userInfo.email},`}</UserDetail>
              <UserDetail>{`bio: ${userInfo.bio},`}</UserDetail>
              <UserDetailBrackets>{`};`}</UserDetailBrackets>
              {/* <h1>
            {userInfo._id} - {auth.decodedToken?.user?._id}
          </h1> */}
            </div>
            {userInfo._id === auth.decodedToken?.user?._id && (
              <Tooltip
                title="edit profile"
                onClick={() => setIsEdittable(true)}
              >
                <EditPen alt="user avatar" src="/edit_pen_icon.png" />
              </Tooltip>
            )}
          </>
        )}
      </MainWrapper>
    </Layout>
  );
};

export default Home;
