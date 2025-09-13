import React from 'react';
import Profile from './Profile.jsx'
import ProductCard from './ProductCard.jsx';
import Greeting from './Greeting.jsx';
function App() {
  const person = "John Doe";
  const age = 30;

  return (
    <>
      <Profile />
      <Greeting receiverName={person} receiverAge={age}/>
    </>
  );
}

export default App;
