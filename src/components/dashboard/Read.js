import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './Read.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import {FaBan} from "react-icons/fa";
import {FaUserPlus} from "react-icons/fa";
import {FaDonate} from "react-icons/fa";
import UserInfo from './UserInfo/UserInfo';
//import { FaArrowCircleDown } from "react-icons/fa";
// data-bs-toggle="collapse" className='accordian-toggle' data-bs-target="#r2"
const Read = () => {
  const [data,setData] = useState([]);
  //const [open, setOpen] =useState(false);
  const [open, setOpen] = useState({});
  const handleClick = (id) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  function getData()
  {
    axios.get('https://63ebe45f32a081172393adeb.mockapi.io/crud-youtube')
    .then((res)=>{
      //console.log(res);
      setData(res.data);
    })
  }
  function handleDelete(id)
  {
    axios.delete(`https://63ebe45f32a081172393adeb.mockapi.io/crud-youtube/${id}`).then(()=>{
            getData();
           });
  }
  function setToLocalStorage(id,name,email,phone)
  {
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("phone",phone);
  }
   useEffect(()=>{
    getData();
   },[]);
  return (
    <>
      <UserInfo></UserInfo>
      <div className='d-flex justify-content-between m-3 '>
      {/* <h2 >Client List</h2> */}
      <Link to="/">
      <FaUserPlus className='logoo'></FaUserPlus>
      </Link>
      </div>
      <table className="table accordian content-table table-striped dashtable">
  <thead>
    <tr>
      <th scope="col">Client_id</th>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Phone</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData,key)=>{
        return(
            <>
             <tbody key={eachData.id}>
   
     <tr>
     <th scope="row" >{eachData.id} <span onClick={() => handleClick(eachData.id)} data-bs-toggle="collapse" data-bs-target={`#collapseExample${eachData.id}`}>
     {open[eachData.id]? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
     </span>
     </th>
     <td>{eachData.name}</td>
     <td>{eachData.email}</td>
     <td>{eachData.phone}</td>
     <td>
        <Link to="/update">
        <FaUserEdit className='logoo' onClick={
            ()=>{
                setToLocalStorage(eachData.id,eachData.name,eachData.email,eachData.phone);
            }
        }></FaUserEdit>
        </Link>
</td>

     <td>
      <Link>
      <FaBan className='logoo' onClick={
        ()=>{
            handleDelete(eachData.id);
        }
     }></FaBan>
     </Link>
     </td>
  </tr>
  <tr>
     <td colSpan='12' className='hiddenRow'>
    <div className="accordian-body collapse accordian-collapse" id={`collapseExample${eachData.id}`}>
      <table className='table table-striped'>
         <thead>
         <tr className="info">
													<th>Investment Name</th>
													<th>Investment Type</th>
													<th>Investment Strategy Name</th>		
													<th>Account ID</th>	
													<th>ModelAPLId</th>
                          <th>Investment Amount</th>
													<th>Edit</th>
				 </tr>
         </thead>
         <tbody>
         <tr>
         <td> Lorem</td>
													<td>Lorem</td>
													<td>Lorem</td>
													<td> Lorem</td>
													<td> Lorem</td>
                          <td>U$8.00000 </td>
													<td> 
                          <FaUserEdit/>
													</td>
          </tr>
          <tr>
          <td> Lorem</td>
													<td>Lorem</td>
													<td>Lorem</td>
													<td> Lorem</td>
													<td> Lorem</td>
                          <td>U$8.00000 </td>
													<td> 
                          <FaUserEdit/>
													</td>
          </tr>
          <tr>
          <td> Lorem</td>
													<td>Lorem</td>
													<td>Lorem</td>
													<td> Lorem</td>
													<td> Lorem</td>
                          <td>U$8.00000 </td>
													<td> 
                          <FaUserEdit/>
													</td>
          </tr>
            {/* Modal Code starting Here */}
            <button type="button" className="btn btn-dark my-2 modal-btn text-center" data-bs-toggle="modal" data-bs-target={`#example${eachData.id}`}>
Add Investment <FaDonate size={30}/>
</button>
<div className="modal fade" id={`example${eachData.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  {console.log(eachData.id+"yaha")}
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Investment</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <input type="text" placeholder='Investment Name' className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
  <select className="form-select" aria-label="Default select example" id='exampletype1'>
  <option selected disabled>Investment Type</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='Investment Strategy Name' className="form-control" id="StrategyName1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='Account ID' className="form-control" id="AccountId" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='ModelAPLId'className="form-control" id="ModelAPLId" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" placeholder='Investment Amount' className="form-control" id="InvestmentAmount" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 text-center">
  <button type="submit" className="btn btn-primary">Submit</button>
  <button type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
  </div>
  </form>
      </div>
    </div>
</div>
</div>
             {/* Modal Code Finishing Here */}
         </tbody>
      </table>
     
    </div>
    </td>
  </tr> 
 </tbody>
 </>
        );
       })
  }
</table>
</>
)
}
export default Read;


