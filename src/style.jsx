import styled from "styled-components";

export const ProductCard = styled.div`
  width: 300px;
  height: 100%;
  max-height: 500px;
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

  @media (max-width: 1310px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }

  grid-gap: 30px;
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

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  background-color: rgba(64, 224, 208, 0.35);
  color: rgb(114, 114, 236);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: center;
`;

export const MainContent = styled.main`
  flex: 1;
  padding-bottom: 100px;
`;

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  text-align: center;
  background-color: rgba(64, 224, 208);
  color: rgb(114, 114, 236);
  padding: 20px;
`;

export const StyledButton = styled.button`
  color: rgb(114, 114, 236);
  background-color: rgba(64, 224, 208);
  border-color: rgb(114, 114, 236);
  border-radius: 5px;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  padding: 8px;

  &:hover {
    color: rgba(64, 224, 208);
    background-color: rgb(114, 114, 236);
  }
`;

export const StyledCartProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledQtyBtnContainer = styled.div`
  display: flex;
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
