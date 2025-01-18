import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
`;

export const ItemList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ItemPrice = styled.p`
  color: #666;
  margin-bottom: 5px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

export const QuantityInput = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  border: 1px solid #ddd;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    color: #666;
  }
`;

export const Footer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

export const Total = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #000;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #333;
  }
`; 