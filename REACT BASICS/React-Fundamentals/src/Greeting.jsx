import React from 'react';
function Greeting({ receiverName, receiverAge } ) {
    return (
        <div>
          <h1>Hello, {receiverName}</h1>
         <h1>age = {receiverAge}</h1>
        </div>
    );
  }

export default Greeting;
