import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Search from "./Search";
import { item } from "../utils/mockData";
import TopRatedProduct from "./TopRatedProduct";
import Bulb from "./Bulb";
import Cooler from "./Cooler";
import Fan from "./fan";
import Iron from "./Iron";
import Strip from "./Strip";
import Spekar from "./Spekar";

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(item);
  const [isTopRated, setIsTopRated] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // To track product type filter

  function handleFilteredProducts(filteredData) {
    setFilteredProducts(filteredData);
  }

  function toggleTopRated() {
    setIsTopRated((prev) => !prev);
  }

  function filterByType(type) {
    setSelectedType(type === selectedType ? "" : type); // Toggle selection
  }

  function showAllProducts() {
    setIsTopRated(false);
    setSelectedType("");
  }

  // Apply all active filters whenever state changes
  useEffect(() => {
    let updatedProducts = item; // Always start from the original list

    if (isTopRated) {
      updatedProducts = updatedProducts.filter((res) => res.rating > 4.2);
    }

    if (selectedType) {
      updatedProducts = updatedProducts.filter((res) => res.type === selectedType);
    }

    setFilteredProducts(updatedProducts);
  }, [isTopRated, selectedType]); // Runs whenever filter states change

  return (
    <div className="product">
      <h1>Electrical Products</h1>

      <Search filterFunc={handleFilteredProducts} allProducts={item} />

      {/* Filters Section */}
      <div className="filter-buttons">
        <button onClick={showAllProducts}>All</button>
        
        <Bulb bulbFunc={() => filterByType("bulb")} />
        <Cooler coolerFunc={() => filterByType("cooler")} />
        <Fan fanFunc={() => filterByType("fan")} />
        <Iron ironFunc={() => filterByType("iron")} />
        <Strip stripFunc={() => filterByType("strip")} />
        <Spekar spekarFunc={() => filterByType("spekar")} />
        <TopRatedProduct topRatedFunc={toggleTopRated} />
      </div>

      <div className="prodbox">
        {filteredProducts.map((res) => (
          <ProductCard key={res.id} proDetail={res} />
        ))}
      </div>
    </div>
  );
}

export default Products;
