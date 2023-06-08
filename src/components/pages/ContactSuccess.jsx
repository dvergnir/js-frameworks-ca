import { Link } from "react-router-dom";
import { StyledButton } from "../../style";

export default function ContactSuccess() {
  return (
    <>
      <h1>Your message has been sent!</h1>
      <Link to="/">
        <StyledButton>Take me home</StyledButton>
      </Link>
    </>
  );
}
