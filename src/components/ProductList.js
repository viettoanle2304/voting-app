import React, { useEffect, useState } from "react";
import Seed from "../models/productModel.js";
import Product from "./Product.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([...Seed.products]);
  }, []);

  const handleProductUpVote = (id) => {
    // console.log(id);

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, votes: product.votes + 1 };
      }

      return product;
    });

    setProducts(updatedProducts);
  };

  const sortedProducts = [...products].sort((a, b) => b.votes - a.votes);

  const renderedProducts = sortedProducts.map((product) => (
    <div className="w-2/3 mx-auto" key={"product-" + product.id}>
      <Product
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        productImageUrl={product.productImageUrl}
        submitterAvatarImg={product.submitterAvatarImg}
        onVote={handleProductUpVote}
      />
    </div>
  ));

  return renderedProducts;
};

export default ProductList;
