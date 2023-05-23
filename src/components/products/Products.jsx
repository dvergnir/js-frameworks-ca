import { ProductItem } from "./ProductItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard, GridContainer } from "./style";

export default function Products() {
  try {
    const [data, setData] = useState([]);
    const endpoint = "https://api.noroff.dev/api/v1/online-shop";

    async function getData() {
      const response = await fetch(endpoint);
      setData(await response.json());
    }

    useEffect(() => {
      getData();
    }, []);

    return (
      <GridContainer>
        {data.map((data) => (
          <ProductCard className="product-card" key={data.id}>
            <Link to={`product/${data.id}`}>
              <h2>{data.title}</h2>
              <p className="product-price">
                Price: {data.price.toLocaleString()} NOK
              </p>
              <img
                src={data.imageUrl}
                className="product-image"
                alt={data.title}
              />
            </Link>
          </ProductCard>
        ))}
      </GridContainer>
    );
  } catch (error) {
    console.log(error);
  }
}
