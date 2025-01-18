import React from 'react';
import { Product } from '../../types/Product';
import { useCart } from '../../contexts/CartContext';
import * as S from './styles';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={product.image} alt={product.name} loading="lazy" />
      </S.ImageContainer>
      <S.Info>
        <S.Name>{product.name}</S.Name>
        <S.Price>{formatPrice(product.price)}</S.Price>
        <S.AddToCartButton onClick={() => addToCart(product)}>
          Adicionar ao Carrinho
        </S.AddToCartButton>
      </S.Info>
    </S.Container>
  );
} 