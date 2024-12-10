import React, { useState } from 'react';

const AdminPage = () => {
  // Состояние для данных формы
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [pieces, setPieces] = useState('');
  const [ageRecommendation, setAgeRecommendation] = useState('');
  const [category, setCategory] = useState('');

  // Функция для отправки данных на сервер
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: parseFloat(price), // преобразуем цену в число
      pieces: parseInt(pieces), // преобразуем количество деталей в число
      age_recommendation: ageRecommendation,
      category,
    };

    // Отправляем данные на сервер с помощью fetch
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added:', data);
        // Очистить форму после успешного добавления товара
        setName('');
        setPrice('');
        setPieces('');
        setAgeRecommendation('');
        setCategory('');
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div>
      <h1>Admin Page - Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number of Pieces:</label>
          <input
            type="number"
            value={pieces}
            onChange={(e) => setPieces(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age Recommendation:</label>
          <input
            type="text"
            value={ageRecommendation}
            onChange={(e) => setAgeRecommendation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPage;
