import React from "react";
import Profile from "./Profile.jsx";
import ProductCard from "./ProductCard.jsx";
import Greeting from "./Greeting.jsx";
import Car from "./Car.jsx";
import "./App.css";
import BlogPost from "./BlogPost.jsx";
import IdCard from "./idcard.jsx";
function App() {
  const product = {
    name: "Laptop",
    price: 999.99,
    isAvailable: true,
  };
  const product1 = {
    name: "Laptop",
    price: 999.99,
    isAvailable: false,
  };
  const products = [
    { name: "Laptop", price: 999.99, isAvailable: true },
    { name: "Smartphone", price: 699.99, isAvailable: false },
    { name: "Tablet", price: 499.99, isAvailable: true },
  ];
  const posts = [
    {
      Author: "John Doe",
      Title: "React Basics",
      Content: "This is a blog post about React basics.",
    },
    {
      Author: "Jane Smith",
      Title: "Advanced React",
      Content: "This is a blog post about advanced React topics.",
    },
    {
      Author: "Alice Johnson",
      Title: "React Hooks",
      Content: "This is a blog post about React Hooks.",
    },
  ];

  return (
    <div className="App">
      {posts.map((posts) => (
        <BlogPost
          Author={posts.Author}
          Title={posts.Title}
          Content={posts.Content}
        />
      ))}

      {/* <Profile />
      {
        products.map((products)=>(<ProductCard 
          Name={products.name} 
          Price={products.price} 
          isAvailable={products.isAvailable} />
        ))
      } */}

      {/* <ProductCard product={products} /> */}
      {/* <ProductCard product={product1} /> */}
      {/* <IdCard student={student} /> */}
    </div>
  );
}

export default App;
