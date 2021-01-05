import React from 'react';
import { Text } from "react-native";
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

        <div className='form-inputs'>
            <label className='form-label'> Related to: </label>
            <select>
            <option value="grapefruit">Request Callback</option>
            <option value="lime">Request a Prospectus</option>
            <option selected value="coconut">Course Enquiry</option>
            <option value="mango">Information for Employers</option>
            <option value="mango">Room Hire</option>
            <option value="mango">Accomodation</option>
            <option value="mango">Other (Specify in Comment)</option>
            </select>
        </div>

        <div className='form-inputs'>
            <label className='form-label'> * Comment </label>
            <input
            className='form-input'
            type='comment'
            name='comment'
            placeholder='Enter comment.'
            rows='3'
            value={values.comment}
            onChange={handleChange}
          />
          {errors.comment && <p>{errors.comment}</p>}
        </div>

        <div className='form-inputs'>
        <label className='form-label'> I would like to be contacted by: </label>
        </div>
        {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
        <input  
        type={type}
        id='email'
        label='Email'
         /> <Text className='checkbox-text'>Email</Text>
         </div>
         ))}
         {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
        <input  
        type={type}
        id='phone'
        label='Phone'
         /> <Text className='checkbox-text'>Phone</Text>
         </div>
         ))}
         {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
        <input  
        type={type}
        id='text-message'
        label='Text message'
         /> <Text className='checkbox-text'>Text Message</Text>
         </div>
         ))}

        
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