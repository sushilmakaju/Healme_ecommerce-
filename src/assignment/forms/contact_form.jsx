import React, { useState } from 'react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  console.log(formValues.name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.message) tempErrors.message = "Message is required";
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
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 transform transition-all hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            type="text"
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            type="submit"
          >
            Send
          </button>
          <span className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800">
            We'll get back to you soon!
          </span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
