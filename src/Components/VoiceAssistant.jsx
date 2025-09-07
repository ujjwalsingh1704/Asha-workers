import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, MessageCircle, X } from 'lucide-react';

const VoiceAssistant = ({ isActive, onToggle }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [showChat, setShowChat] = useState(false);

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    setIsListening(true);
    setTranscript('');
    // Simulate voice recognition
    setTimeout(() => {
      const sampleCommands = [
        'Show me today\'s patients',
        'आज के मरीज़ दिखाएं',
        'Schedule follow-up for Sunita',
        'Search for maternity schemes',
        'Call patient number'
      ];
      const randomCommand = sampleCommands[Math.floor(Math.random() * sampleCommands.length)];
      setTranscript(randomCommand);
      
      setTimeout(() => {
        setIsListening(false);
        processCommand(randomCommand);
      }, 2000);
    }, 1000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const processCommand = (command) => {
    setIsSpeaking(true);
    let responseText = '';
    
    if (command.includes('patients') || command.includes('मरीज़')) {
      responseText = 'Showing today\'s patient list. आज की मरीज़ों की सूची दिखा रहा हूं।';
    } else if (command.includes('follow-up')) {
      responseText = 'Follow-up scheduled successfully. फॉलो-अप सफलतापूर्वक निर्धारित किया गया।';
    } else if (command.includes('scheme')) {
      responseText = 'Here are the available health schemes. यहां उपलब्ध स्वास्थ्य योजनाएं हैं।';
    } else {
      responseText = 'Command processed. आदेश संसाधित किया गया।';
    }
    
    setResponse(responseText);
    
    setTimeout(() => {
      setIsSpeaking(false);
    }, 3000);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      {/* Floating Voice Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end space-y-3">
          {/* Chat Toggle */}
          <button
            onClick={toggleChat}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
          </button>

          {/* Main Voice Button */}
          <button
            onClick={handleVoiceToggle}
            className={`p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              isListening
                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                : isActive
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gray-500 hover:bg-gray-600'
            }`}
          >
            {isListening ? (
              <MicOff className="w-8 h-8 text-white" />
            ) : (
              <Mic className="w-8 h-8 text-white" />
            )}
          </button>

          {/* Status Indicator */}
          {(isListening || isSpeaking) && (
            <div className="bg-white rounded-lg shadow-lg p-3 max-w-xs animate-fade-in">
              <div className="flex items-center space-x-2">
                {isListening ? (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Listening...</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">Speaking...</span>
                  </>
                )}
              </div>
              
              {transcript && (
                <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-600">
                  "{transcript}"
                </div>
              )}
              
              {response && (
                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                  {response}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Chat Interface */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 animate-slide-up">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800">ASHA Assistant</h3>
              <p className="text-sm text-gray-600">आशा सहायक</p>
            </div>
            <button
              onClick={toggleChat}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="p-4 max-h-64 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  Hello! I can help you with:
                </p>
                <ul className="text-xs text-blue-700 mt-2 space-y-1">
                  <li>• Patient management</li>
                  <li>• Health scheme information</li>
                  <li>• Follow-up scheduling</li>
                  <li>• Voice commands in Hindi/English</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-3">
                <p className="text-sm text-orange-800">
                  नमस्ते! मैं आपकी मदद कर सकता हूं:
                </p>
                <ul className="text-xs text-orange-700 mt-2 space-y-1">
                  <li>• मरीज़ों का प्रबंधन</li>
                  <li>• स्वास्थ्य योजनाओं की जानकारी</li>
                  <li>• फॉलो-अप शेड्यूलिंग</li>
                  <li>• आवाज़ी कमांड</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your question... अपना प्रश्न लिखें"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;
