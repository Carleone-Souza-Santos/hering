import React from 'react';
import { useCart } from '../../contexts/CartContext';
import * as S from './styles';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { itemsCount } = useCart();

  return (
    <S.Container>
      <S.Content>
        <S.Logo>LOGO</S.Logo>
        <S.NavMenu>
          <S.NavLink href="#">Novidades</S.NavLink>
          <S.NavLink href="#">Roupas</S.NavLink>
          <S.NavLink href="#">Acessórios</S.NavLink>
          <S.NavLink href="#">Sale</S.NavLink>
          <S.CartButton onClick={onCartClick}>
            Carrinho ({itemsCount})
          </S.CartButton>
        </S.NavMenu>
      </S.Content>
    </S.Container>
  );
} 