import React from 'react';
import { useCart } from '../../contexts/CartContext';
import * as S from './styles';

export function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  return (
    <S.Container>
      <S.Title>Carrinho</S.Title>
      {items.length === 0 ? (
        <S.EmptyMessage>Seu carrinho está vazio</S.EmptyMessage>
      ) : (
        <>
          <S.ItemList>
            {items.map(item => (
              <S.Item key={item.product.id}>
                <S.ItemImage src={item.product.image} alt={item.product.name} />
                <S.ItemInfo>
                  <S.ItemName>{item.product.name}</S.ItemName>
                  <S.ItemPrice>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(item.product.price)}
                  </S.ItemPrice>
                  <S.QuantityControl>
                    <S.QuantityButton
                      onClick={() =>
                        updateQuantity(item.product.id, Math.max(0, item.quantity - 1))
                      }
                    >
                      -
                    </S.QuantityButton>
                    <S.QuantityInput
                      type="number"
                      value={item.quantity}
                      onChange={e =>
                        updateQuantity(item.product.id, Number(e.target.value))
                      }
                      min="0"
                    />
                    <S.QuantityButton
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      +
                    </S.QuantityButton>
                  </S.QuantityControl>
                </S.ItemInfo>
                <S.RemoveButton
                  onClick={() => removeFromCart(item.product.id)}
                >
                  ×
                </S.RemoveButton>
              </S.Item>
            ))}
          </S.ItemList>
          <S.Footer>
            <S.Total>
              Total:{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(total)}
            </S.Total>
            <S.CheckoutButton onClick={() => { }}>
              Finalizar Compra
            </S.CheckoutButton>
          </S.Footer>
        </>
      )}
    </S.Container>
  );
} 