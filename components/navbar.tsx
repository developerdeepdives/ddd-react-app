import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import NavLink from "./navLink";

interface Props {
  siteTitle: string;
}

const Nav = styled.div`
  margin-bottom: 1.45rem;
  user-select: none;
`;

const OuterContainer = styled.div`
  background: #363945;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  font: italic bold 36px "Roboto Mono";
  font-display: fallback;
  color: #ff4141;
  margin: 0;
  flex-grow: 1;
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
`;

const HomeLink = styled.a`
  cursor: pointer;
  color: #ff4141;
  text-decoration: none;
`;

const Navbar: React.FC<Props> = ({ siteTitle }) => {
  // const [open, setOpen] = useState(false);

  const links = (
    <>
      <NavLink href="/about">
        <PageLink>about</PageLink>
      </NavLink>
      <NavLink href="/events">
        <PageLink>past_events</PageLink>
      </NavLink>
    </>
  );

  return (
    <div>
      <Nav>
        <OuterContainer>
          <Container>
            <Title>
              <Link href={"/"}>
                <HomeLink>{siteTitle.toUpperCase()}</HomeLink>
              </Link>
            </Title>
            {links}
          </Container>
        </OuterContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
