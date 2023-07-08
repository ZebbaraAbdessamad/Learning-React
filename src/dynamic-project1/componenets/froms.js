import React , {useState} from "react";
import '../style.css'
export default function Froms(){
 const [FormData , setFormData]=useState({
    firstName:'',
    lastName:'',
    comment:'',
    terms : true,
    radio_emp:'',
    select_opt:'',

 })
 console.log(FormData)

 function handelChange(event){
    const {name ,value, type ,checked} =event.target
    setFormData(prevFormData=>({
        ...prevFormData,
        [name]: type==='checkbox'?checked:value // we add '[ ]' to dynamically assigning the value 

    }))
 }
 
 function handelSubmit(event){
    event.preventDfault();
    console.log(FormData);
 }
    return (
        <form onSubmit={handelSubmit}>
        <div className="input-group">
          <input value={FormData.firstName} name='firstName' onChange={handelChange} type="text" placeholder="First Name" />
          <input  value={FormData.lastName} name='lastName' onChange={handelChange}  type="text" placeholder="Last Name" />
          <textarea value={FormData.comment} name="comment" onChange={handelChange}  placeholder="Message" />
          <label>
            <input name="terms" type="checkbox" onChange={handelChange}  />
            Agree to terms and conditions
          </label>
          <div className="radio-group">
            <label>
              <input name="radio_emp" type="radio" value="option 1" onChange={handelChange} checked={FormData.radio_emp==="option 1"} />
              Option 1
            </label>
            <label>
              <input name="radio_emp" type="radio" value="option 2" onChange={handelChange}  checked={FormData.radio_emp==="option 2"}  />
              Option 2
            </label>
            <label>
              <input name="radio_emp" type="radio" value="option 3" onChange={handelChange} checked={FormData.radio_emp==="option 3"}  />
              Option 3
            </label>
          </div>
          <select value={FormData.select_opt} name="select_opt" onChange={handelChange}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
      <button>submit</button>
        </div>
      </form>
    )
}