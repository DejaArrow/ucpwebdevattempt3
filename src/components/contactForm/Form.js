import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './ContactSuccess';
import ContactForm from './ContactForm';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        {!isSubmitted ? (
          <ContactForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;