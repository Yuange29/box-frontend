import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getLinks } from "../../data/navLinks.js";
import logoImg from "../../assets/img/logo-img.png";

const Header = styled.header`
  height: 64px;
  padding: 0 24px;
  background: var(--emerald-color);
  border-bottom: 1px solid #eee;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  box-shadow: ${(p) => (p.scrolled ? "0 2px 8px rgba(0,0,0,0.15)" : "none")};
  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled(NavLink)`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  color: var(--cotton-color);
  text-decoration: none;
  border-radius: 8px 8px 0 0;
  transition: all 0.25s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  &.active {
    background-color: var(--cotton-color);
    color: var(--emerald-color);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MobileNavButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 22px;
  color: var(--cotton-color);
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 150;

  opacity: ${(p) => (p.open ? 1 : 0)};
  pointer-events: ${(p) => (p.open ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const NavBar = styled.div`
  padding: 80px 24px;
  width: 70%;
  max-width: 320px;
  height: 100dvh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: var(--mobile-nav-side);
  z-index: 200;

  transform: translateX(${(p) => (p.open ? "0" : "-100%")});
  transition: transform 0.3s ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

export default function HeaderLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useContext(AuthContext);
  const links = getLinks(user);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
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
        {links.map((link) => (
          <NavButton
            key={link.id}
            to={link.path}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavButton>
        ))}
      </NavBar>
    </>
  );
}
