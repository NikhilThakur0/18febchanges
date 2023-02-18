import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Update.css'

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const history=useNavigate();
  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    //console.log("haha");
   },[]);
   function handleUpdate(e)
   {
    e.preventDefault();
      axios.put(`https://63ebe45f32a081172393adeb.mockapi.io/crud-youtube/${id}`,
      {
        name:name,
        email:email,
        phone:phone
     }
      ).then( ()=>{
        history('/read');
    });
   }
  return (
   <>
   <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <div className="login rounded">
      <h4 className='mb-3 text-center'>Update Client Information</h4>
      <form action="">
      <div className="form-group mb-2 my-4">
        <input type="text" value={name} className='form-control'
        name="name"
        onChange={(e)=>{
            setName(e.target.value);
        }
      }
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="email" placeholder='Email' className='form-control'
        name='email' value={email}
        onChange={(e)=>{
          setEmail(e.target.value);
      }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Phone' className='form-control'
        name="phone"
        value={phone}
        onChange={(e)=>{
            setPhone(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4 d-flex justify-content-around">
         <button className='btn btn-primary abc' onClick={handleUpdate}>
          Update
         </button>
         <Link to="/read">
         <button className='btn btn-primary'>Back</button>
         </Link>
      </div>
      
      </form>
    </div>
    </div>
   </>
  )
}

export default Update
