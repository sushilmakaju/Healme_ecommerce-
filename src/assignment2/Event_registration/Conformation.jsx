import React from 'react';

const Confirmation_file = ({ formData, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration completed!');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Confirmation</h2>
      <p>Please review your information:</p>
      <div>
        <strong>Name:</strong> {formData.firstName} {formData.lastName}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Event:</strong> {formData.eventName}
      </div>
      <div>
        <strong>Date:</strong> {formData.eventDate}
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
          Previous
        </button>
        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Confirm Registration
        </button>
      </div>
    </div>
  );
};

export default Confirmation_file;