import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavLink from "./navLink";
import Burger from "@animated-burgers/burger-squeeze";
import { AuthToken } from "../utils/authToken";
import { List, ListItem, Popover } from "@material-ui/core";
import Cookie from "js-cookie";

interface Props {
  siteTitle: string;
}

const Nav = styled.div`
  margin-bottom: 1.45rem;
  user-select: none;
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #363945;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  padding: 1rem 1.0875rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    background-color: #aaa;
  }

  @media screen and (min-width: 801px) {
    .burger {
      display: none;
    }
  }
`;

const Title = styled.h1`
  font: italic bold 36px "Roboto Mono";
  font-display: fallback;
  color: #ff4141;
  margin: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font: 24px "Roboto Mono";
  font-display: fallback;
  margin-left: 30px;
  color: #ffa741;
  &.active {
    color: #15dcd1;
  }
  &:hover {
    color: #15dcd1;
  }
`;
const PopoverLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font: 24px "Roboto Mono";
  color: #ffa741;
  &.active {
    color: #15dcd1;
  }
  &:hover {
    color: #15dcd1;
  }
`;

const HomeLink = styled.a`
  cursor: pointer;
  color: #ff4141;
  text-decoration: none;

  @media screen and (max-width: 940px) {
    font-size: 24px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const NonMobileLinkMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const MobileLinkMenu = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  position: relative;
  text-align: center;
  width: 100%;
  height: 7em;
  background-color: #22232b;
  transform-origin: 100% 0%;
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.open {
    transform: scaleY(1);
  }

  @media screen and (min-width: 801px) {
    display: none;
  }
`;

const Avatar = styled.img`
  height: 40px;
  width: auto;
`;

const AvatarWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const StyledList = styled(List)`
  background: #363945;
`;

const Navbar: React.FC<Props> = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);
  const auth = new AuthToken(Cookie.get("token"));
  const [
    filterPanelAnchorEl,
    setFilterPanelAnchorEl,
  ] = useState<HTMLElement | null>(null);

  const links = (
    <>
      <NavLink href="/about">
        <PageLink>about</PageLink>
      </NavLink>
      <NavLink href="/events">
        <PageLink>past_events</PageLink>
      </NavLink>
      <NavLink href="/stream">
        <PageLink>watch_now</PageLink>
      </NavLink>
      {!auth.isValid && (
        <NavLink href="/login">
          <PageLink>login</PageLink>
        </NavLink>
      )}
    </>
  );

  const avatarPopover = (() => {
    return (
      <>
        {auth && (
          <StyledList>
            <ListItem>
              <NavLink href={`/profile/${auth.decodedToken.user?._id}`}>
                <PopoverLink>profile</PopoverLink>
              </NavLink>
            </ListItem>
            <ListItem>
              <PopoverLink onClick={() => auth.logout()}>log_out</PopoverLink>
            </ListItem>
          </StyledList>
        )}
      </>
    );
  })();

  return (
    <div>
      <Popover
        open={Boolean(filterPanelAnchorEl)}
        anchorEl={filterPanelAnchorEl}
        onClose={() => setFilterPanelAnchorEl(null)}
        onBackdropClick={() => setFilterPanelAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {avatarPopover}
      </Popover>
      <Nav>
        <OuterContainer>
          <Container>
            <Title>
              <Link href={"/"}>
                <HomeLink>{siteTitle.toUpperCase()}</HomeLink>
              </Link>
            </Title>
            <NonMobileLinkMenu>{links}</NonMobileLinkMenu>
            <Burger isOpen={open} onClick={() => setOpen(!open)} />
          </Container>
          {auth.isValid && (
            <AvatarWrapper
              onClick={(e) => setFilterPanelAnchorEl(e.currentTarget)}
            >
              <Avatar alt="user avatar" src="/blank_avatar.png" />
            </AvatarWrapper>
          )}
        </OuterContainer>
        <MobileLinkMenu className={open ? "open" : ""}>{links}</MobileLinkMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
