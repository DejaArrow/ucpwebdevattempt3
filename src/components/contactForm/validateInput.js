export default function validateInput(values) {
    let errors = {};
  
    if (!values.name) {
      errors.name = 'Name required';
    }
    
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone) {
      errors.phone = 'A Phone number is required';
    } else if (values.phone.length < 11) {
      errors.phone = 'Invalid Phone Number';
    }
  
    if (!values.comment) {
        errors.comment = 'Comment Required';
        
    }
    return errors;
  }