export default function Footer({ children }) {
  return (
    <footer>
      <div className="copyright">
        <p>{children}</p>
      </div>
    </footer>
  );
}
