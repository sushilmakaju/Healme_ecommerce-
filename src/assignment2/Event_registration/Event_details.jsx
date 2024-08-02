
import React, { useState } from 'react';

const Event_Details = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.eventName.trim()) newErrors.eventName = 'Event name is required';
    if (!formData.eventDate.trim()) newErrors.eventDate = 'Event date is required';

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
        <label htmlFor="eventName" className="block mb-1">Event Name</label>
        <input
          type="text"
          id="eventName"
          value={formData.eventName}
          onChange={(e) => updateFormData({ eventName: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.eventName && <p className="text-red-500 text-sm mt-1">{errors.eventName}</p>}
      </div>
      <div>
        <label htmlFor="eventDate" className="block mb-1">Event Date</label>
        <input
          type="date"
          id="eventDate"
          value={formData.eventDate}
          onChange={(e) => updateFormData({ eventDate: e.target.value })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
          Previous
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Next
        </button>
      </div>
    </form>
  );
};

export default Event_Details;