import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

export const SignUp = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata);



    const res = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have registered successfully'
      })
    } else {
      Swal.fire({
        icon: 'Fail',
        title: 'Fail',
        text: 'Error'
      })
    }

  }

  return (


    <div className='vh-100' style={{ backgroundImage: "url('https://images.pexels.com/photos/7130487/pexels-photo-7130487.jpeg?auto=compress&cs=tinysrgb&w=600')", backgroundSize: 'cover' }}>
      <div className="col-md-4 mx-auto pt-5">
        <div class="card bg-transparent">
          <div class="card-body">
            <h5 class="card-title text-center fs-3" style={{ fontFamily: 'Lato', color: '#000001' }}>Sign Up</h5> <hr />
            <Formik initialValues={{ fullname: '', email: '', contact: '', password: '' }} onSubmit={userSubmit}>

              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>

                  <label style={{ fontFamily: 'Lato', color: '#000001' }}>Full Name</label>
                  <input type="name" className='form-control mb-4' name="fullname" onChange={handleChange} value={values.fullname} />
                  <label style={{ fontFamily: 'Lato', color: '#000001' }}>Email Address</label>
                  <input type="email" className='form-control mb-4' name="email"  onChange={handleChange} value={values.email}/>
                  <label style={{ fontFamily: 'Lato', color: '#000001' }}>Mobile Number</label>
                  <input type="number" className='form-control mb-4' name="contact" onChange={handleChange} value={values.contact} />
                  <label style={{ fontFamily: 'Lato', color: '#000001' }}>Password</label>
                  <input type="password" className='form-control mb-4' name="password" onChange={handleChange} value={values.password} />

                  <button style={{ fontFamily: 'Lato' }} className='btn btn-danger btn-rounded text-center'>Submit</button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1" >
                      <i className="fab fa-facebook-f" />
                    </button>

                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-google" />
                    </button>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-twitter" />
                    </button>
                    <button className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-github" />
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div></div>
      </div>
    </div>
  )
}

export default SignUp;

