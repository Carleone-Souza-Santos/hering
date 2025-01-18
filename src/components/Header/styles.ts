import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #000;
  }
`; 