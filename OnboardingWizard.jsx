import React, { useState } from 'react';

const OnboardingWizard = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Account Setup</h2>
            <p className="mb-4">Enter your basic account details.</p>
            <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
            <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
            <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next Step</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 2: Monetization Setup</h2>
            <p className="mb-4">Connect your PayPal for payouts.</p>
            <input type="text" placeholder="PayPal Email" className="border p-2 w-full mb-4" />
            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Previous</button>
              <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next Step</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Blog Definition</h2>
            <p className="mb-4">Tell us about your blog niche and keywords.</p>
            <input type="text" placeholder="Blog Niche (e.g., 'Vegan Recipes')" className="border p-2 w-full mb-4" />
            <textarea placeholder="Keywords (comma-separated)" className="border p-2 w-full mb-4"></textarea>
            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Previous</button>
              <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next Step</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 4: Social Media & Finalize</h2>
            <p className="mb-4">Connect your social media accounts.</p>
            <input type="text" placeholder="Pinterest Profile URL" className="border p-2 w-full mb-4" />
            <div className="flex justify-between">
              <button onClick={prevStep} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Previous</button>
              <button onClick={() => alert('Onboarding Complete!')} className="bg-blue-600 text-white px-4 py-2 rounded">Finish</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Client Onboarding Wizard</h1>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingWizard;


