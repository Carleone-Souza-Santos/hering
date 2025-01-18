import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: #f5f5f5;
  border-radius: 4px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 1rem;
  text-align: center;
  background: white;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  min-height: 40px;
`;

export const Price = styled.p`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
`; 