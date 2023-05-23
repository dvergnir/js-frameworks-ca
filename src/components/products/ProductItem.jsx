export function ProductItem({ title, description, image, reviews }) {
  return (
    <div className="product-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <b>{price.toLocaleString()}</b>
      <p>{reviews}</p>
    </div>
  );
}
