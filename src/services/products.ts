import { Product } from '../types/Product';

const products: Product[] = [
  {
    id: 1,
    image: 'https://www.hering.com.br/store/assets/products/regular/K47XNAAEN_01.jpg',
    name: 'Camiseta Masculina Básica',
    price: 49.99
  },
  {
    id: 2,
    image: 'https://www.hering.com.br/store/assets/products/regular/K1AH-1ASN_01.jpg',
    name: 'Polo Masculina Básica',
    price: 89.99
  },
  {
    id: 3,
    image: 'https://www.hering.com.br/store/assets/products/regular/K4HE-1ASN_01.jpg',
    name: 'Camiseta Masculina Manga Longa',
    price: 79.99
  },
  {
    id: 4,
    image: 'https://www.hering.com.br/store/assets/products/regular/K3WF-1ASN_01.jpg',
    name: 'Regata Masculina Básica',
    price: 39.99
  },
  {
    id: 5,
    image: 'https://www.hering.com.br/store/assets/products/regular/K47X-1ASN_01.jpg',
    name: 'Camiseta Masculina Gola V',
    price: 49.99
  },
  {
    id: 6,
    image: 'https://www.hering.com.br/store/assets/products/regular/K3WG-1ASN_01.jpg',
    name: 'Camiseta Masculina Estampada',
    price: 59.99
  },
  {
    id: 7,
    image: 'https://www.hering.com.br/store/assets/products/regular/K47Y-1ASN_01.jpg',
    name: 'Camiseta Masculina Listrada',
    price: 69.99
  },
  {
    id: 8,
    image: 'https://www.hering.com.br/store/assets/products/regular/K3WH-1ASN_01.jpg',
    name: 'Camiseta Masculina Henley',
    price: 79.99
  }
];

export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}; 