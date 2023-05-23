import styled from "styled-components";

export const ProductCard = styled.div`
  width: 300px;
  height: 100%;
  margin: auto;
  margin-top: 50px;
  background-color: rgba(64, 224, 208, 0.35);

  @media (max-width: 420px) {
    width: 250px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    /* Tablet size */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 630px) {
    /* Mobile size */
    grid-template-columns: 1fr;
  }

  grid-gap: 10px;
`;
