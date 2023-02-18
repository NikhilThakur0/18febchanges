import React,{useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './create.css';
import UserInfo from './UserInfo/UserInfo';
const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const history=useNavigate();
    const header={'Access-Control-Allow-Origin':'*'};
    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.post(
            'https://63ebe45f32a081172393adeb.mockapi.io/crud-youtube',
             {
                name:name,
                email:email,
                phone:phone,
                header
             }
        ).then(
            ()=>{
                history('/read');
            }
        )
        
    }
  return (
    <>
    <UserInfo></UserInfo>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <div className="login rounded">
      <h4 className='mb-3 text-center'>Add a new Client</h4>
      <form action="">
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Client Name' className='form-control'
        name="name"
        onChange={(e)=>{
            setName(e.target.value);
        }
      }
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="email" placeholder='Email' className='form-control'
        name='email'
        onChange={(e)=>{
          setEmail(e.target.value);
      }}
        />
      </div>
      <div className="form-group mb-2 my-4">
        <input type="text" placeholder='Phone' className='form-control'
        name="phone"
        onChange={(e)=>{
            setPhone(e.target.value);
        }}
        />
      </div>
      <div className="form-group mb-2 my-4 d-flex justify-content-around">
         <button className='btn btn-primary' onClick={handleSubmit}>Add Client</button>
         <Link to="/read">
         <button className='btn btn-primary'>Show Client List</button>
         </Link>
      </div>
      
      </form>
    </div>
    </div>
    </>
    )
}
 export default Create 
