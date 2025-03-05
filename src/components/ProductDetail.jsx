import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const params =useParams();
  console.log("params",params);
  return (
    <div>
    
      <h1>Product detail</h1>
      <h2>product id:{params.id}</h2>
    </div>
  )
}

export default ProductDetail
