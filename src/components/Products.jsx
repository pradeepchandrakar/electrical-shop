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
import { Link } from "react-router-dom";

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(item);
  const [isTopRated, setIsTopRated] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // New state for sorting

  function handleFilteredProducts(filteredData) {
    setFilteredProducts(filteredData);
  }

  function toggleTopRated() {
    setIsTopRated((prev) => {
      const newState = !prev;
      return newState;
    });
  }
  

  function filterByType(type) {
    setSelectedType(type === selectedType ? "" : type);
  }

  function showAllProducts() {
    setIsTopRated(false);
    setSelectedType("");
    setSortOrder("");
  }

  function sortProducts(order) {
    setSortOrder(order);
  }

  useEffect(() => {
    let updatedProducts = item;

    if (isTopRated) {
      updatedProducts = updatedProducts.filter((res) => res.rating > 4.2);
    }

    if (selectedType) {
      updatedProducts = updatedProducts.filter((res) => res.type === selectedType);
    }

    if (sortOrder === "lowToHigh") {
      updatedProducts = [...updatedProducts].sort((a, b) => a.price - b.price);
     
    } else if (sortOrder === "highToLow") {
      updatedProducts = [...updatedProducts].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [isTopRated, selectedType, sortOrder]);

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
      </div>

      {/* Sorting Section */}
      <div className="sort-buttons">
        <button onClick={() => sortProducts("lowToHigh")}>Price: Low to High</button>
        <button onClick={() => sortProducts("highToLow")}>Price: High to Low</button>
        <TopRatedProduct topRatedFunc={toggleTopRated} />
      </div>

      <div className="prodbox">
      {filteredProducts.map((res) => (
  <Link key={res.id} to={`/${res.id}`}>
    <ProductCard proDetail={res} />
  </Link>
))}

         
       
      </div>
    </div>
  );
}

export default Products;

