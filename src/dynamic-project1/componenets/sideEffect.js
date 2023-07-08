import React, { useState, useEffect } from 'react';

export default  function ExampleComponent() {
  const [data ,setData ]=useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs as a side effect after every render
    // Update the document title
    // featching data
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res=>res.json())
    .then(data => setData(data));
    
    // modifing title
    document.title = `Count: ${count}`;

     // Clean up the effect
     return () => {
        // Perform any cleanup tasks if necessary
        console.log('Component unmounted or count changed.');
      };

  }, [count]); // The effect runs only when the 'count' variable changes ( le moteur de changement)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <pre>{JSON.stringify(data , null ,2)}</pre>
    </div>
  );

}



// async function getMemes(){
//     const res = await fetch(`https://swapi.dev/api/people/${count}`);
//     const data = await res.json()
//     setAllMemes(data)
// }

// window.addEventListener("resize", window.innerWidth);
// window.removeEventListener("resize", window.innerWidth);