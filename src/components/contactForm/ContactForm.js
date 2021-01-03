import React from 'react';
import validate from './validateInput';
import useForm from './useForm';
import './Form.css';

const ContactForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Enquiry Form
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>* Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your Name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>* Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>* Phone</label>
          <input
            className='form-input'
            type='phone'
            name='phone'
            placeholder='Enter your Phone number'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>


        
        <button className='form-input-btn' type='submit'>
          Submit Enquiry
        </button>
        <span className='form-input-required'>
          * Required Fields. 
        </span>
      </form>
    </div>
  );
};

export default ContactForm;