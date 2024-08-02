
import React, { useState } from 'react';

const Personal_Info = ({ formData, updateFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block mb-1">First Name</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={(e) => updateFormData({ firstName: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>
      <div>
        <label htmlFor="lastName" className="block mb-1">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={(e) => updateFormData({ lastName: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Next
      </button>
    </form>
  );
};

export default Personal_Info;