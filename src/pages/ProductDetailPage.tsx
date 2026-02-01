import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Product Details</h1>
      <p>Viewing product ID: {id}</p>
    </div>
  );
};

export default ProductDetailPage;
