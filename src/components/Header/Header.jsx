import { useState } from 'react';
import { IoChevronDown, IoChevronForward } from 'react-icons/io5';

import {
  HeaderWrapper,
  Left,
  LogoImg,
  Nav,
  NavList,
  NavItem,
  Right,
  SignButton,
  Avatar,
  MobileMenuBtn,
  MobileMenu,
  MobileNav,
  MobileRight,
} from './Header.styled.js';

import logo from '../../assets/images/Header/logo.png';
import userIcon from '../../assets/images/Header/avatar.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Left>
          <LogoImg src={logo} alt="logo" />
        </Left>

        <Nav>
          <NavList>
            <NavItem>Who we are</NavItem>
            <NavItem>Contacts</NavItem>
            <NavItem>Menu</NavItem>
          </NavList>
        </Nav>

        <Right>
          <SignButton>Sign Up</SignButton>
          <Avatar src={userIcon} alt="user" />
        </Right>

        <MobileMenuBtn onClick={() => setIsOpen(!isOpen)}>
          Menu {isOpen ? <IoChevronForward /> : <IoChevronDown />}
        </MobileMenuBtn>
      </HeaderWrapper>

      {isOpen && (
        <MobileMenu>
          <MobileNav>
            <NavItem>Who we are</NavItem>
            <NavItem>Contacts</NavItem>
            <NavItem>Menu</NavItem>
          </MobileNav>

          <MobileRight>
            <Avatar src={userIcon} alt="user" />
            <SignButton>Sign Up</SignButton>
          </MobileRight>
        </MobileMenu>
      )}
    </>
  );
};
