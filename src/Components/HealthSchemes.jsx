import React, { useState } from 'react';
import { ArrowLeft, Heart, Users, Baby, Shield, Search, Mic, Phone, FileText } from 'lucide-react';

const HealthSchemes = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVoiceSearching, setIsVoiceSearching] = useState(false);

  const schemes = [
    {
      id: 1,
      name: 'Ayushman Bharat',
      nameHindi: 'आयुष्मान भारत',
      description: 'Comprehensive health insurance coverage up to ₹5 lakhs per family per year',
      descriptionHindi: 'प्रति परिवार प्रति वर्ष ₹5 लाख तक का व्यापक स्वास्थ्य बीमा कवरेज',
      eligibility: 'Rural families with SECC-2011 deprivation criteria',
      benefits: ['Free treatment in empaneled hospitals', 'Cashless transactions', 'Pre and post-hospitalization coverage'],
      color: 'bg-blue-500',
      icon: Shield,
      contact: '14555'
    },
    {
      id: 2,
      name: 'Janani Suraksha Yojana',
      nameHindi: 'जननी सुरक्षा योजना',
      description: 'Cash assistance for institutional delivery to reduce maternal mortality',
      descriptionHindi: 'मातृ मृत्यु दर को कम करने के लिए संस्थागत प्रसव हेतु नकद सहायता',
      eligibility: 'Pregnant women belonging to BPL families',
      benefits: ['Cash assistance for delivery', 'Free delivery care', 'Postnatal care support'],
      color: 'bg-pink-500',
      icon: Baby,
      contact: '104'
    },
    {
      id: 3,
      name: 'Pradhan Mantri Surakshit Matritva Abhiyan',
      nameHindi: 'प्रधानमंत्री सुरक्षित मातृत्व अभियान',
      description: 'Free comprehensive antenatal care on 9th of every month',
      descriptionHindi: 'हर महीने की 9 तारीख को निःशुल्क व्यापक प्रसवपूर्व देखभाल',
      eligibility: 'All pregnant women in their 2nd/3rd trimester',
      benefits: ['High-quality ANC services', 'Early detection of complications', 'Follow-up care'],
      color: 'bg-green-500',
      icon: Heart,
      contact: '1800-180-1104'
    },
    {
      id: 4,
      name: 'Mission Indradhanush',
      nameHindi: 'मिशन इंद्रधनुष',
      description: 'Universal immunization program for children and pregnant women',
      descriptionHindi: 'बच्चों और गर्भवती महिलाओं के लिए सार्वभौमिक टीकाकरण कार्यक्रम',
      eligibility: 'Children under 2 years and pregnant women',
      benefits: ['Free vaccination', 'Complete immunization', 'Door-to-door coverage'],
      color: 'bg-purple-500',
      icon: Users,
      contact: '1800-180-1104'
    }
  ];

  const handleVoiceSearch = () => {
    setIsVoiceSearching(true);
    // Simulate voice search
    setTimeout(() => {
      setIsVoiceSearching(false);
      setSearchQuery('maternity scheme');
    }, 2000);
  };

  const filteredSchemes = schemes.filter(scheme =>
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scheme.nameHindi.includes(searchQuery) ||
    scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <h1 className="text-2xl font-bold text-gray-800">Health Schemes</h1>
          <p className="text-gray-600">सरकारी स्वास्थ्य योजनाएं</p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search schemes... योजनाओं की खोज करें"
            />
          </div>
          <button
            onClick={handleVoiceSearch}
            className={`p-3 rounded-lg transition-all ${
              isVoiceSearching
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isVoiceSearching && (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-medium">Listening for scheme query...</span>
          </div>
        </div>
      )}

      {/* Schemes Grid */}
      <div className="grid gap-6">
        {filteredSchemes.map((scheme) => {
          const Icon = scheme.icon;
          return (
            <div key={scheme.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-xl ${scheme.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{scheme.name}</h3>
                    <p className="text-lg text-orange-600 font-medium mb-2">{scheme.nameHindi}</p>
                    <p className="text-gray-600 leading-relaxed">{scheme.description}</p>
                    <p className="text-gray-500 text-sm mt-2 italic">{scheme.descriptionHindi}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Eligibility • पात्रता</h4>
                    <p className="text-gray-600 text-sm">{scheme.eligibility}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Benefits • लाभ</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">Call {scheme.contact}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">Apply Now</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                    <Mic className="w-4 h-4" />
                    <span className="text-sm font-medium">Ask Assistant</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">No schemes found</h3>
          <p className="text-gray-600">Try searching with different keywords or use voice search</p>
        </div>
      )}

      {/* Voice Commands Help */}
      <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-200">
        <h3 className="text-lg font-bold text-orange-800 mb-4">Voice Search Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-orange-700">• "Show me maternity schemes"</p>
            <p className="text-sm text-orange-700">• "गर्भवती महिलाओं के लिए योजना"</p>
            <p className="text-sm text-orange-700">• "Insurance schemes for families"</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-orange-700">• "Vaccination programs"</p>
            <p className="text-sm text-orange-700">• "बच्चों के लिए टीकाकरण"</p>
            <p className="text-sm text-orange-700">• "How to apply for Ayushman Bharat"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSchemes;