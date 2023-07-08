import React ,{ useState } from 'react';
import '../style.css';
import memesData from '../memesData';
import meme from 'images/memes.png'


export default function Main( props) {
    // using image with state 
    const [memeImage, setMemeImage] = useState(meme);
    function getMemeImage(){
        const memesArray =memesData.data.memes;
        const randomNumer = Math.floor(Math.random()*memesArray.length);
        setMemeImage(memesArray[randomNumer].url);
    }

    // using state with arry 
    const [thingsArray, setThingsArray] = useState(['thing1','thing2']);
    function AddItem(){
        setThingsArray(prevthingArray=>[...prevthingArray ,`thing${prevthingArray.length+1}`]);
    }
   const thingsList = thingsArray.map(ele=> <p>{ele}</p>);

 // using state with object 
 const [object ,setObject] = useState({
    id:1,
    name:"zebbara",
    location:"paris",
    score:23,
    age:21

 })
 function addScore(){
    setObject(prevObject=>({
        ...prevObject,
        score:prevObject.score+1
    }))
 }

 //-----using forms 
 const [formData, setFormData] = useState({
    firstName:'',
    lastName:''
 });

 console.log(formData);
 
 function handelchange(event){
    setFormData(prevFormData=>({
       ...prevFormData,
       [event.target.name]:event.target.value
    }))
 }

    
  return (
    <div className= {props.darkMode ? "main-dark":"main"} >
            <div className="input-group">
                <input className="input-field" type="text" name='firstName' onChange={handelchange} placeholder="First Name" />
                <input className="input-field" type="text" name='lastName' onChange={handelchange}  placeholder="Last Name" />
            </div>
            <button onClick={getMemeImage} className="button">Submit😂</button>
            <button onClick={AddItem} className="button">AddItem 👍</button>
            <button onClick={addScore} className="button">test 😒</button>
            <h3>{thingsList}</h3>
            <h4 >name:{props.myname}   | age:{object.age}  | score: {object.score}</h4>
            <img src={memeImage} alt="Description" className="meme-image"/>

    </div>
  );
}

