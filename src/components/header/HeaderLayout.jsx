import styled, { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";

import logoImg from "../../assets/img/logo-img.png";

import { getLinks } from "../../data/generalData.js";

const Header = styled.header`
  height: 64px;
  padding: 0 24px;
  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: ${(props) =>
    props.$scrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none"};

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 60px;
  }
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
  object-fit: contain;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled(NavLink)`
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: var(--text-primary);
    background-color: var(--bg-hover);
  }

  &.active {
    color: var(--text-primary);
    background-color: var(--bg-section);

    &::after {
      content: "";
      position: absolute;
      bottom: 4px;
      left: 16px;
      right: 16px;
      height: 2px;
      background: var(--text-primary);
      border-radius: 2px;
    }
  }
`;

const MobileNavButton = styled.button`
  background: var(--bg-section);
  border: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2001;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1500;
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? "auto" : "none")};
  transition: opacity 0.4s ease;
`;

const NavBar = styled.div`
  padding: 80px 16px 24px;
  width: 280px;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--bg-secondary);
  z-index: 2000;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateX(${(props) => (props.open ? "0" : "-100%")});
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Style riêng cho NavButton khi nằm trong Mobile NavBar */
  ${NavButton} {
    font-size: 16px;
    padding: 12px 20px;
    border-radius: 12px;

    &.active {
      background-color: var(--btn-primary);
      color: var(--btn-primary-text);
      &::after {
        display: none;
      }
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const NavItem = styled(NavButton)`
  ${(props) =>
    props.$open &&
    css`
      animation: ${slideIn} 0.4s ease forwards;
      animation-delay: ${props.$index * 0.05 + 0.1}s;
      opacity: 0;
    `}
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
export default function HeaderLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useContext(AuthContext);
  const links = getLinks(user);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <Header $scrolled={scrolled}>
        <NavLink to="/">
          <Logo src={logoImg} alt="logo" />
        </NavLink>

        <DesktopNav>
          {links.map((link) => (
            <NavButton key={link.id} to={link.path}>
              {link.label}
            </NavButton>
          ))}
        </DesktopNav>

        <MobileNavButton onClick={() => setMenuOpen((p) => !p)}>
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
        </MobileNavButton>
      </Header>

      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />

      <NavBar open={menuOpen}>
        <MobileMenuContainer>
          {links.map((link, index) => (
            <NavItem
              key={link.id}
              to={link.path}
              $index={index}
              $open={menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavItem>
          ))}
        </MobileMenuContainer>
      </NavBar>
    </>
  );
}
