import React from "react";
import Profile from "./Profile.jsx";
import ProductCard from "./ProductCard.jsx";
import Greeting from "./Greeting.jsx";
import Car from "./Car.jsx";
import "./App.css";
import BlogPost from "./BlogPost.jsx";
import IdCard from "./idcard.jsx";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount((count) => 0);
  };
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const handleemail = (event) => {
    setemail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  setFormData({
    ...FormData,
    [event.target.name]:event.target.value
  })
  return (
    <div className="App">
      {/* buttons for increment and decrement */}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <p>count = {count}</p>

      <input
        type="text"
        name="Email"
        placeholder=" Enter Email"
        onChange={handleemail}
        value={email}
      />
      <input
        type="Password"
        name="Password"
        placeholder="Enter Password"
        onChange={handlePassword}
        value={Password}
      />
      <button
        type="submit"
        onClick={() => alert(`Email: ${email}\nPassword: ${Password}`)}
      >
        Submit
      </button>

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
