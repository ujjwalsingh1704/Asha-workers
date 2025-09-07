import React, { useState } from 'react';
import { ArrowLeft, User, Calendar, Heart, Thermometer, Mic, Save } from 'lucide-react';

const PatientEntry = ({ onBack }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    symptoms: '',
    vitals: {
      temperature: '',
      bloodPressure: '',
      pulse: ''
    },
    followUp: ''
  });

  const handleVoiceInput = (field) => {
    setCurrentField(field);
    setIsRecording(true);
    // Simulate voice input
    setTimeout(() => {
      setIsRecording(false);
      setCurrentField(null);
      // Mock voice input result
      if (field === 'name') {
        setPatientData(prev => ({ ...prev, name: 'Sunita Sharma' }));
      } else if (field === 'age') {
        setPatientData(prev => ({ ...prev, age: '35' }));
      } else if (field === 'symptoms') {
        setPatientData(prev => ({ ...prev, symptoms: 'Fever and headache for 3 days' }));
      }
    }, 2000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center mb-6 animate-slide-up">
        <button 
          onClick={onBack}
          className="p-2 rounded-lg hover:bg-white hover:shadow-sm hover:scale-110 transition-all duration-200 mr-4"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 animate-slide-up animation-delay-100">Patient Entry</h1>
          <p className="text-gray-600 animate-slide-up animation-delay-200">रोगी का विवरण दर्ज करें</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 animate-fade-in animation-delay-300">
        {/* Form Section */}
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-400">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center animate-slide-up animation-delay-500">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Basic Information
            </h3>
            
            <div className="space-y-4 animate-fade-in animation-delay-600">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient Name • रोगी का नाम
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={patientData.name}
                    onChange={(e) => setPatientData(prev => ({ ...prev, name: e.target.value }))}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-200"
                    placeholder="Speak or type patient name"
                  />
                  <button
                    onClick={() => handleVoiceInput('name')}
                    className={`p-3 rounded-lg transition-all ${
                      currentField === 'name' && isRecording
                        ? 'bg-red-500 text-white animate-pulse scale-110'
                        : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-110'
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age • उम्र
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={patientData.age}
                      onChange={(e) => setPatientData(prev => ({ ...prev, age: e.target.value }))}
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-200"
                      placeholder="Age"
                    />
                    <button
                      onClick={() => handleVoiceInput('age')}
                      className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-110 transition-all duration-200"
                    >
                      <Mic className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender • लिंग
                  </label>
                  <select
                    value={patientData.gender}
                    onChange={(e) => setPatientData(prev => ({ ...prev, gender: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-200"
                  >
                    <option value="">Select Gender</option>
                    <option value="female">Female • महिला</option>
                    <option value="male">Male • पुरुष</option>
                    <option value="other">Other • अन्य</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Symptoms */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-700">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center animate-slide-up animation-delay-800">
              <Heart className="w-5 h-5 mr-2 text-red-600" />
              Symptoms • लक्षण
            </h3>
            
            <div className="animate-fade-in animation-delay-900">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Symptoms • वर्तमान लक्षण
              </label>
              <div className="flex space-x-2">
                <textarea
                  value={patientData.symptoms}
                  onChange={(e) => setPatientData(prev => ({ ...prev, symptoms: e.target.value }))}
                  rows={4}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent hover:border-red-300 transition-all duration-200"
                  placeholder="Describe symptoms in detail..."
                />
                <button
                  onClick={() => handleVoiceInput('symptoms')}
                  className={`p-3 rounded-lg transition-all self-start ${
                    currentField === 'symptoms' && isRecording
                      ? 'bg-red-500 text-white animate-pulse scale-110'
                      : 'bg-red-500 text-white hover:bg-red-600 hover:scale-110'
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Vitals */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-1000">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center animate-slide-up animation-delay-1100">
              <Thermometer className="w-5 h-5 mr-2 text-green-600" />
              Vital Signs • महत्वपूर्ण संकेत
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in animation-delay-1200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temperature (°F)
                </label>
                <input
                  type="text"
                  value={patientData.vitals.temperature}
                  onChange={(e) => setPatientData(prev => ({ 
                    ...prev, 
                    vitals: { ...prev.vitals, temperature: e.target.value }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-green-300 transition-all duration-200"
                  placeholder="98.6"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Pressure
                </label>
                <input
                  type="text"
                  value={patientData.vitals.bloodPressure}
                  onChange={(e) => setPatientData(prev => ({ 
                    ...prev, 
                    vitals: { ...prev.vitals, bloodPressure: e.target.value }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-green-300 transition-all duration-200"
                  placeholder="120/80"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pulse (BPM)
                </label>
                <input
                  type="text"
                  value={patientData.vitals.pulse}
                  onChange={(e) => setPatientData(prev => ({ 
                    ...prev, 
                    vitals: { ...prev.vitals, pulse: e.target.value }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-green-300 transition-all duration-200"
                  placeholder="72"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6 animate-fade-in animation-delay-500">
          {/* Follow-up */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-600">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center animate-slide-up animation-delay-700">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              Follow-up • फॉलो-अप
            </h3>
            
            <div className="animate-fade-in animation-delay-800">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Next Visit Date
              </label>
              <input
                type="date"
                value={patientData.followUp}
                onChange={(e) => setPatientData(prev => ({ ...prev, followUp: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-300 transition-all duration-200"
              />
            </div>
          </div>

          {/* Voice Status */}
          {isRecording && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 animate-scale-up">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-red-800 mb-2 animate-pulse">Recording...</h4>
                <p className="text-red-600 animate-fade-in">
                  Listening for {currentField === 'name' ? 'patient name' : 
                               currentField === 'age' ? 'patient age' : 
                               currentField === 'symptoms' ? 'symptoms' : currentField}
                </p>
                <div className="flex justify-center mt-4 space-x-1">
                  {[8, 12, 6, 10, 14, 8, 16].map((height, i) => (
                    <div 
                      key={i}
                      className="w-1 bg-gradient-to-t from-red-400 to-red-600 rounded animate-bounce" 
                      style={{
                        height: `${height * 4}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.6s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 animate-slide-up animation-delay-900">
            <Save className="w-6 h-6" />
            <span>Save Patient Record</span>
          </button>

          {/* Help Text */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 animate-slide-up animation-delay-1000">
            <h4 className="font-bold text-orange-800 mb-2 animate-slide-up animation-delay-1100">Voice Assistant Help</h4>
            <ul className="text-sm text-orange-700 space-y-1 animate-fade-in animation-delay-1200">
              <li>• Click the mic button next to any field</li>
              <li>• Speak clearly in Hindi or English</li>
              <li>• The system works offline for basic entry</li>
              <li>• Data syncs when connection is available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientEntry;