import React , { useState } from 'react';
import './style.css';
import Header from 'dynamic-project1/componenets/header';
import Main from './componenets/main';
import Conunt from './componenets/count';
import Box from './componenets/box';
import memesData from './memesData';
import Froms from './componenets/froms';
import ExampleComponent from './componenets/sideEffect';

export default function  DynamicProject() {
   
    //parent state (used with child Count and Main)
    const [name]=useState('zebbara');

    //using state with props
    const [result, setResult] = useState(0);
    const handleAddition = () => {
      setResult(prevResult => prevResult + 1);
    };
    const handleSubtraction = () => {
      setResult(prevResult => prevResult - 1);
    };

    //using id to send events
    const [memes ,setMemes]=useState(memesData.data.memes);

    function changeStatus(id){
      return  setMemes(  prevMeme =>{
                            return  prevMeme.map((meme)=> meme.id===id ? (
                              {
                                ...meme,
                                status:!meme.status
                              }
                            ) : meme )
                        }
              )
    }

    const memesElements = memes.map((meme)=>(
      <Box 
        key={meme.id}  
        {...meme}
        handleClick={changeStatus}
      />
    ))
    
    // change to dark mode
    const [mode ,setMode] = useState(false);
    function changeMode(){
      setMode(!mode)
    }

    
    return (
      <div className={mode?"container-dark":"container"}>
        <Header darkMode={mode} handleClick={changeMode} />
        <Main darkMode={mode}  myname={name} />
        <Conunt   myname={name} value={result} handleClick={handleAddition} handleClick2={handleSubtraction} />
        <div className="card-container">
          {memesElements}      
        </div>
        <Froms />
        <ExampleComponent />
      </div>
   );
};