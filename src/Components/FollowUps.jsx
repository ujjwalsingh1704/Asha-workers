import React, { useState } from 'react';
import { ArrowLeft, Calendar, Phone, MessageSquare, User, Clock, AlertCircle } from 'lucide-react';

const FollowUps = ({ onBack }) => {
  const [selectedTab, setSelectedTab] = useState('today');

  const followUps = {
    today: [
      {
        id: 1,
        name: 'Sunita Sharma',
        age: 35,
        time: '10:00 AM',
        condition: 'Diabetes Check-up',
        priority: 'high',
        phone: '+91 98765 43210',
        lastVisit: '2024-01-15'
      },
      {
        id: 2,
        name: 'Ramesh Kumar',
        age: 42,
        time: '2:00 PM',
        condition: 'Hypertension Follow-up',
        priority: 'medium',
        phone: '+91 98765 43211',
        lastVisit: '2024-01-10'
      },
      {
        id: 3,
        name: 'Priya Patel',
        age: 28,
        time: '4:00 PM',
        condition: 'Pregnancy Check-up',
        priority: 'high',
        phone: '+91 98765 43212',
        lastVisit: '2024-01-12'
      }
    ],
    pending: [
      {
        id: 4,
        name: 'Amit Singh',
        age: 55,
        time: 'Overdue',
        condition: 'Post-surgery Check',
        priority: 'high',
        phone: '+91 98765 43213',
        lastVisit: '2024-01-08'
      },
      {
        id: 5,
        name: 'Lakshmi Devi',
        age: 48,
        time: 'Overdue',
        condition: 'Medication Review',
        priority: 'medium',
        phone: '+91 98765 43214',
        lastVisit: '2024-01-05'
      }
    ]
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const sendReminder = (patient, type) => {
    // Mock reminder functionality
    alert(`${type.toUpperCase()} reminder sent to ${patient.name}`);
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
          <h1 className="text-2xl font-bold text-gray-800">Follow-ups</h1>
          <p className="text-gray-600">फॉलो-अप प्रबंधन</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-blue-700">Today's Visits</div>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-red-600">2</div>
              <div className="text-sm text-red-700">Overdue</div>
            </div>
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-green-700">Completed</div>
            </div>
            <Clock className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-purple-700">This Week</div>
            </div>
            <User className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-6">
        <button
          onClick={() => setSelectedTab('today')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            selectedTab === 'today'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Today's Follow-ups
        </button>
        <button
          onClick={() => setSelectedTab('pending')}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
            selectedTab === 'pending'
              ? 'bg-white text-red-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Pending & Overdue
        </button>
      </div>

      {/* Follow-up List */}
      <div className="space-y-4">
        {followUps[selectedTab].map((patient) => (
          <div key={patient.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{patient.name}</h3>
                    <p className="text-gray-600">Age: {patient.age} • Last visit: {patient.lastVisit}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {selectedTab === 'today' ? `Scheduled: ${patient.time}` : patient.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{patient.condition}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(patient.priority)}`}>
                        {patient.priority.toUpperCase()} PRIORITY
                      </span>
                      <span className="text-sm text-gray-500">{patient.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => sendReminder(patient, 'sms')}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">SMS</span>
                </button>
                
                <button
                  onClick={() => sendReminder(patient, 'whatsapp')}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Call</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-200">
        <h3 className="text-lg font-bold text-orange-800 mb-4">Voice Commands</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-orange-700">• "Send reminder to all today's patients"</p>
            <p className="text-sm text-orange-700">• "Show me overdue follow-ups"</p>
            <p className="text-sm text-orange-700">• "Schedule follow-up for [patient name]"</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-orange-700">• "Mark [patient name] as completed"</p>
            <p className="text-sm text-orange-700">• "Call [patient name]"</p>
            <p className="text-sm text-orange-700">• "Show this week's appointments"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUps;