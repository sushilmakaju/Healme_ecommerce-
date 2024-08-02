
import React, { useState } from 'react';
import Personal_Info from './Personal_Info';
import Event_Details from './Event_details';
import Confirmation_file from './Conformation';
import Success from './Success';

const EventRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eventName: '',
    eventDate: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Personal_Info formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
      case 2:
        return <Event_Details formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Confirmation_file formData={formData} prevStep={prevStep} />;
    
      case 4:
        return <Success />
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Event Registration</h1>
      {renderStep()}
    </div>
  );
};

export default EventRegistration;