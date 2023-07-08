import React from 'react';
import ReactDOM from 'react-dom/client';


//import FirstProject from './first-project/first-project';
//import SecondProject from './second-project/second-project';
//import ThirdProject from 'third-project/third-project';
import DynamicProject from 'dynamic-project1/dynamic-project1';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <FirstProject /> */}
    {/* <SecondProject/> */}
    {/* <ThirdProject/> */}
    <DynamicProject />
  </React.StrictMode>
);


