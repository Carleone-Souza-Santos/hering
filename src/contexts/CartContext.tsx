import React, { createContext, useState, useContext } from 'react';
import { Product } from '../types/Product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextData {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  total: number;
  itemsCount: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems(state => {
      const existingItem = state.find(item => item.product.id === product.id);

      if (existingItem) {
        return state.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(state => state.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setItems(state =>
      state.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const itemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        itemsCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 