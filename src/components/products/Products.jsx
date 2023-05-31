import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/api";
import ProductList from "./ProductList";
import SearchBar from "../SearchBar";

export default function Products() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        setFilteredData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };

  return (
    <div>
      <SearchBar products={data} onSearch={handleSearch} />
      <ProductList products={filteredData} />
    </div>
  );
}
