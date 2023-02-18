//import React from 'react'
import  '../Sign_up/Form.css'
import pic from './team.svg'
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas/Helper.js';
import { Link } from 'react-router-dom';
function Form() {
  const initialValues={
    Fname:"",
    Lname:"",
    Phone_no:"",
    email:"",
    company:"",
    city:"",
    password:"",
    cfmpassword:""
  }
  const Formik=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values,action) =>{
      console.log(values);
      action.resetForm();
    }
  })
  //console.log(Formik.errors);
  //console.log(Formik);
  return (
    <div>
    {/* <h1>hey</h1> */}
      <section className='Form my-4 mx-5'>
          <div className='container'>
            <div className='row py-5'>
              <div className='col-lg-6 '>
                <img src={pic} 
                className='img-fluid office' alt='team'/>
              </div>
              <div className='col-lg-6 px-5 pt-1'>
                <h4>Create a new Account</h4>

                <form onSubmit={Formik.handleSubmit}>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="Fname" placeholder='First Name' className='form-control shadow-none my-3' value={Formik.values.Fname} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.Fname&&Formik.touched.Fname?(<p className='Form-error'> {Formik.errors.Fname}</p>):null}
                    </div>
                    <div className='col-lg-7'>
                      <input type="name" name="Lname" placeholder='Last Name' className='form-control shadow-none my-3' value={Formik.values.Lname} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.Lname&&Formik.touched.Lname?(<p className='Form-error'> {Formik.errors.Lname}</p>):null}
                    </div>
                  </div>
                  {/* <div className='form-row'>
                    
                  </div> */}
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="text" name="Phone_no" placeholder='Phone No' className='form-control shadow-none my-3' value={Formik.values.Phone_no} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.Phone_no&&Formik.touched.Phone_no?(<p className='Form-error'> {Formik.errors.Phone_no}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="email" name="email" placeholder='Email' className='form-control shadow-none my-3' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.email&&Formik.touched.email?(<p className='Form-error'> {Formik.errors.email}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="company" placeholder='Company' className='form-control shadow-none my-3' value={Formik.values.company} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.company&&Formik.touched.company?(<p className='Form-error'> {Formik.errors.company}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="name" name="city" placeholder='City' className='form-control shadow-none my-3' value={Formik.values.city} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.city&&Formik.touched.city?(<p className='Form-error'> {Formik.errors.city}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="Password" name="password" placeholder='Password' className='form-control shadow-none my-3' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.password&&Formik.touched.password?(<p className='Form-error'> {Formik.errors.password}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                      <input type="Password" name="cfmpassword" placeholder='Confirm Password' className='form-control shadow-none' value={Formik.values.cfmpassword} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                      {Formik.errors.cfmpassword&&Formik.touched.cfmpassword?(<p className='Form-error'> {Formik.errors.cfmpassword}</p>):null}
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-lg-7'>
                    <button type="submit" className="btn btn-primary mt-3 mb-3  btn_sign">Sign Up</button>
                    
                    </div>
                  </div>
                  {/* <a href='#' style={{textDecoration: "none"}}>Forgot Password</a> */}
                  {/* <div classform="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" htmlFor="flexCheckChecked">
    I agree to the terms and conditions 
  </label>
</div> */}

                  <p>Already Have An Account? <Link style={{textDecoration: "none"}} to='/login'>Login Here</Link></p>
                </form>
              </div>
            </div>
          </div>
      </section>
  </div>
  )
}

export default Form