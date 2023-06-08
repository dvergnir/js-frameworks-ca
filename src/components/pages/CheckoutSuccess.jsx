import { Link } from "react-router-dom";
import { StyledButton } from "../../style";

export default function CheckoutSuccess() {
  return (
    <>
      <h1>Checkout Success!</h1>
      <Link to="/">
        <StyledButton>Take me home</StyledButton>
      </Link>
    </>
  );
}
