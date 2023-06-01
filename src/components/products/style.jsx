import styled from "styled-components";

export const ProductCard = styled.div`
  width: 300px;
  height: 100%;
  margin: auto;
  margin-top: 50px;
  background-color: rgba(64, 224, 208, 0.35);
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px rgba(64, 224, 208, 1);
  }

  @media (max-width: 420px) {
    width: 250px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }

  grid-gap: 10px;
`;

export const ProductDetailContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: auto;
  margin-top: 50px;
  background-color: rgba(64, 224, 208, 0.35);
  color: rgb(114, 114, 236);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
`;
