import React, { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';
import * as S from './styles';
import { getProducts } from '../../services/products';

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <S.Container>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
} 