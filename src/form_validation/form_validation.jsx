import React, { useState } from 'react';

const FormValidation = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully');
      // handle form submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label><br />
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className='border-2 border-sky-500 p-2 rounded-lg'
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label><br />
        <input className='border-2  border-sky-500 p-2 rounded-lg'
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button class="rounded hover:rounded-lg bg-indigo-500" type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;