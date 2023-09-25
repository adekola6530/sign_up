import {useFormik} from 'formik'
import React from 'react'
import axios from 'axios'
import * as yup from 'yup'

const Formik = () => {
    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit:(values)=>{
            console.log(formik.values);

        },
        // validate:(values)=>{
        //     let errors ={}
        //     if(!values.firstName){
        //         errors.firstName='Required'
        //     }
        //     if(!values.lastName){
        //         errors.lastName='Required'
        //     }
        //     if (!values.email) {
        //         errors.email = 'Required';
        //       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //       }
        //     if(!values.password){
        //         errors.password='Required'
        //     }
        //     return errors
        // }
        validationSchema:yup.object({
          firstName:yup.string().required('this field is required').min(2).max(15),
          lastName:yup.string().required('this field is required').min(2).max(15),
          email:yup.string().required().email('email is invalid'),
          password:yup.string().required('this field is required').min(4).max(16),



        })
    })

    //console.log(formik);
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className="col-5 mx-auto">
        <h1 className='text-center text-success'>Sign Up</h1>

        <div className="mb-3">
          <label className="form-label">Firstname</label>
          <input
            type="text"
            className="form-control" name='firstName'
            onChange={formik.handleChange}
          />
          <small className='mx-5'>{formik.errors.firstName}</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Lastname</label>
          <input
            type="text"
            className="form-control" name='lastName'
            onChange={formik.handleChange}
          />
          <small className='mx-5'>{formik.errors.lastName}</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control" name='email'
            onChange={formik.handleChange}
          />
          <small className='mx-5'>{formik.errors.email}</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control" name='password'
            onChange={formik.handleChange}
          />
          <small className='mx-5'>{formik.errors.password}</small>
        </div>

        <div className="mx-auto text-center">
          <button className="btn btn-primary w-100" type='submit'>
            SUBMIT
          </button>
        </div> 
      </form>
    </div> 
  )
}

export default Formik