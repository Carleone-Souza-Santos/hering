import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Modal } from './components/Modal';
import { GlobalStyle } from './styles/global';
import { CartProvider } from './contexts/CartContext';

const theme = {
  colors: {
    primary: '#000',
    secondary: '#333',
    text: '#333',
    background: '#fff'
  }
};

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalStyle />
        <Header onCartClick={() => setIsCartOpen(true)} />
        <ProductGrid />
        <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
          <Cart />
        </Modal>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App; 