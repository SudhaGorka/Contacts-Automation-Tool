import React, { useState } from 'react';
import { Formik } from 'formik'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const styles = {
  
    backdropFilter : "blur(8px)",
    backgroundColor:  "rgba(178,60,253,0.4)",
  }


const Login = () => {


  const navigate = useNavigate();
  //(async and await -> initialize together always)
  const loginSubmit = async (formdata) => {
    console.log(formdata);
    const res = await fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: { 'Content-Type': 'application/json' }
    });


    // 1. url
    // 2. Request Method
    // 3. Body/ JSON Data
    // 4. Type of data 


    console.log(res.status);
    if (res.status === 201) {

      const data = await res.json();
      sessionStorage.setItem('user', JSON.stringify(data));

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: ' You have login successfully'
      });
      navigate('/addcontact');


    } else if (res.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        rext: 'Email or password is Incorrect'
      });

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Unknown Error is Occured'
      });

    }
  }



  return (



    
      <div className="bg-image">
  <img src="https://images.pexels.com/photos/7130487/pexels-photo-7130487.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-100"  alt="Sample"/>
<div className="mask mask-custom" style={{styles}}>
    <div className="d-flex justify-content-center align-items-center">
         <div className="col-md-3 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <Formik initialValues={{ email: '', password: '' }} onSubmit={loginSubmit}>

              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>

                  <h4 className="text-center text-black" style={{ fontFamily: 'Lato' }}>Login</h4>
                  <hr />


                  <label style={{ fontFamily: 'Lato' }} >Email Address</label>
                  <input className='form-control mb-4' type="email" name="email" onChange={handleChange} value={values.email} />
 


                  <label style={{ fontFamily: 'Lato' }}>Password</label>
                  <input className='form-control mb-4' name="password" onChange={handleChange} value={values.password} />
                  <div class="row mb-4">

                    <div class="col d-flex justify-content-center">

                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                        <label class="form-check-label" for="form2Example34" style={{ fontFamily: 'Lato' }}> Remember me </label>
                      </div>
                    </div>

                    <div class="col">

                      <a style={{ fontFamily: 'Lato' }} href="#!" className='pe-3'>Forgot password?</a>
                    </div>
                  </div>

                  <button className='btn btn-danger btn-rounded btn-center w-50 mt-4' style={{ fontFamily: 'Lato' }}>Submit</button>

                  <div class="text-center">
                  <p style={{ fontFamily: 'Lato' }}>Not a member? <a style={{ fontFamily: 'Lato' }} href="#!">Sign Up</a></p></div>

                </form>
              )}
            </Formik>

          
        </div>
      </div></div>
</div></div></div>


  )

}
export default Login;