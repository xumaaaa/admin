import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Pieces: {product.pieces}</p>
            <p>Recommended Age: {product.age_recommendation}</p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
