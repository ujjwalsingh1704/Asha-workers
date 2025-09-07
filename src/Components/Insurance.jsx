import React, { useState } from 'react';
import { ArrowLeft, Shield, Users, Calculator, Check, ArrowRight, Mic } from 'lucide-react';

const Insurance = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [familyData, setFamilyData] = useState({
    headOfFamily: '',
    familySize: '',
    monthlyIncome: '',
    hasPreExistingConditions: false,
    selectedPlan: ''
  });

  const insurancePlans = [
    {
      id: 'basic',
      name: 'Basic Health Cover',
      nameHindi: 'मूलभूत स्वास्थ्य कवर',
      premium: 500,
      coverage: 50000,
      features: ['OPD coverage', 'Basic hospitalization', 'Maternity benefits'],
      recommended: false
    },
    {
      id: 'standard',
      name: 'Family Care Plus',
      nameHindi: 'पारिवारिक देखभाल प्लस',
      premium: 1200,
      coverage: 150000,
      features: ['Comprehensive coverage', 'Pre and post hospitalization', 'Ambulance coverage', 'Health checkups'],
      recommended: true
    },
    {
      id: 'premium',
      name: 'Complete Protection',
      nameHindi: 'संपूर्ण सुरक्षा',
      premium: 2000,
      coverage: 300000,
      features: ['Maximum coverage', 'Critical illness cover', 'International treatment', 'Dental and optical'],
      recommended: false
    }
  ];

  const handleVoiceInput = (field) => {
    setIsVoiceActive(true);
    // Simulate voice input
    setTimeout(() => {
      setIsVoiceActive(false);
      // Mock voice input results
      if (field === 'headOfFamily') {
        setFamilyData(prev => ({ ...prev, headOfFamily: 'Rajesh Kumar' }));
      } else if (field === 'familySize') {
        setFamilyData(prev => ({ ...prev, familySize: '4' }));
      } else if (field === 'monthlyIncome') {
        setFamilyData(prev => ({ ...prev, monthlyIncome: '15000' }));
      }
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Family Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Head of Family • परिवार के मुखिया
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={familyData.headOfFamily}
                  onChange={(e) => setFamilyData(prev => ({ ...prev, headOfFamily: e.target.value }))}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter head of family name"
                />
                <button
                  onClick={() => handleVoiceInput('headOfFamily')}
                  className={`p-3 rounded-lg transition-all ${
                    isVoiceActive ? 'bg-red-500 text-white animate-pulse' : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Family Size • परिवार का आकार
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={familyData.familySize}
                    onChange={(e) => setFamilyData(prev => ({ ...prev, familySize: e.target.value }))}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Number of members"
                  />
                  <button
                    onClick={() => handleVoiceInput('familySize')}
                    className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Income (₹) • मासिक आय
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={familyData.monthlyIncome}
                    onChange={(e) => setFamilyData(prev => ({ ...prev, monthlyIncome: e.target.value }))}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Monthly income"
                  />
                  <button
                    onClick={() => handleVoiceInput('monthlyIncome')}
                    className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={familyData.hasPreExistingConditions}
                  onChange={(e) => setFamilyData(prev => ({ ...prev, hasPreExistingConditions: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  Any pre-existing medical conditions? • कोई पुरानी बीमारी है?
                </span>
              </label>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Choose Insurance Plan</h3>
            
            <div className="space-y-4">
              {insurancePlans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setFamilyData(prev => ({ ...prev, selectedPlan: plan.id }))}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                    familyData.selectedPlan === plan.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  } ${plan.recommended ? 'ring-2 ring-green-200' : ''}`}
                >
                  {plan.recommended && (
                    <div className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-3">
                      RECOMMENDED • सुझाव
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{plan.name}</h4>
                      <p className="text-orange-600 font-medium">{plan.nameHindi}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">₹{plan.premium}</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xl font-bold text-blue-600 mb-2">
                      Coverage: ₹{plan.coverage.toLocaleString()}
                    </div>
                    <ul className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {familyData.selectedPlan === plan.id && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-blue-600 font-medium">Selected Plan</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        const selectedPlan = insurancePlans.find(plan => plan.id === familyData.selectedPlan);
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Review & Confirm</h3>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 mb-4">Enrollment Summary</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Head of Family:</span>
                  <span className="font-medium">{familyData.headOfFamily}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Family Size:</span>
                  <span className="font-medium">{familyData.familySize} members</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Income:</span>
                  <span className="font-medium">₹{familyData.monthlyIncome}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Selected Plan:</span>
                  <span className="font-medium">{selectedPlan?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coverage Amount:</span>
                  <span className="font-medium text-blue-600">₹{selectedPlan?.coverage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Monthly Premium:</span>
                  <span className="font-bold text-green-600">₹{selectedPlan?.premium}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h4 className="font-bold text-blue-800 mb-2">Important Information</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Premium payment can be made monthly or annually</li>
                <li>• Cashless treatment at network hospitals</li>
                <li>• 24/7 customer support available</li>
                <li>• Digital policy documents via SMS/WhatsApp</li>
              </ul>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Enrollment Successful!</h3>
              <p className="text-lg text-green-600 mb-4">नामांकन सफल!</p>
              <p className="text-gray-600 mb-6">
                Insurance application has been submitted successfully. You will receive confirmation via SMS and WhatsApp within 24 hours.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h4 className="font-bold text-green-800 mb-4">Next Steps</h4>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-green-700">Document verification call within 2 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-green-700">Policy activation after verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-green-700">Digital policy card via WhatsApp</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setFamilyData({
                    headOfFamily: '',
                    familySize: '',
                    monthlyIncome: '',
                    hasPreExistingConditions: false,
                    selectedPlan: ''
                  });
                }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Enroll Another Family
              </button>
              <button
                onClick={onBack}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all mr-4"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Micro Insurance</h1>
          <p className="text-gray-600">बीमा नामांकन</p>
        </div>
      </div>

      {/* Progress Bar */}
      {currentStep <= 3 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Step {currentStep} of 3</span>
            <span className="text-sm font-medium text-blue-600">{Math.round((currentStep / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Voice Recording Indicator */}
      {isVoiceActive && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-700 font-medium">Recording voice input...</span>
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      {currentStep <= 3 && (
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <button
            onClick={nextStep}
            disabled={
              (currentStep === 1 && (!familyData.headOfFamily || !familyData.familySize || !familyData.monthlyIncome)) ||
              (currentStep === 2 && !familyData.selectedPlan)
            }
            className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{currentStep === 3 ? 'Submit Application' : 'Next'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Insurance;