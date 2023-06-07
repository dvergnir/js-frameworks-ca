import { StyledFooter } from "../style";

export default function Footer({ children }) {
  return (
    <StyledFooter>
      <footer>
        <div className="copyright">
          <p>{children}</p>
        </div>
      </footer>
    </StyledFooter>
  );
}
