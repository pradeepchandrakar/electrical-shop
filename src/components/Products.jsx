import { useState} from "react";
import ProductCard from "./ProductCard";
import Search from "./Search"
import {item} from "..//utils/mockData"
import TopRatedProudct from "./TopRatedProduct";

function Products(){
  const [filterdProducts,setFilteredProducts]= useState(item);

  function handleFilteredProducts(filteredData){
    setFilteredProducts(filteredData);
  }

  function filterTopRatedProduct(){
  const topRated= filterdProducts.filter((res) =>res.rating>4.5
);
console.log(topRated)
    setFilteredProducts(topRated);
  }

  return(
    <div className="product">
    <h1>Electrical Products</h1>

    < Search filterFunc={handleFilteredProducts} allProducts={item}/>

    <TopRatedProudct topRatedFunc = {filterTopRatedProduct}/>

    <div className="prodbox">
      {filterdProducts.map((res)=>(
        <ProductCard key={res.id} proDetail={res}/>
      ))}
    </div>
    </div>
  );
}
export default Products;