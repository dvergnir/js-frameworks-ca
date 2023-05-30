import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/api";
import ProductList from "./ProductList";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return <ProductList products={data} />;
}
