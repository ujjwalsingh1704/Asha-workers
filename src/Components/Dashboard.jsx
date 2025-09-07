import React from 'react';
import { Users, Calendar, Shield, Heart, Mic, Wifi, TrendingUp, Activity } from 'lucide-react';

const Dashboard = ({ onNavigate }) => {
  const cards = [
    {
      id: 'patients',
      title: 'Patient Entry',
      subtitle: 'रोगी का विवरण',
      description: 'Add new patient details with voice assistance',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600'
    },
    {
      id: 'followups',
      title: 'Follow-ups',
      subtitle: 'फॉलो-अप',
      description: 'Manage patient appointments and reminders',
      icon: Calendar,
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600'
    },
    {
      id: 'schemes',
      title: 'Health Schemes',
      subtitle: 'स्वास्थ्य योजना',
      description: 'Government health scheme information',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-600'
    },
    {
      id: 'insurance',
      title: 'Micro Insurance',
      subtitle: 'बीमा योजना',
      description: 'Enroll families in insurance plans',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 animate-slide-up">नमस्ते, आशा बहन</h1>
            <p className="text-lg text-gray-600 animate-slide-up animation-delay-100">Welcome, ASHA Worker</p>
          </div>
          <div className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-lg animate-bounce-gentle">
            <Wifi className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700 font-medium">Offline Ready</span>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed animate-fade-in animation-delay-200">
          Your intelligent healthcare companion for serving rural communities with care and compassion.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in animation-delay-300">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform">12</div>
            <Activity className="w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
          </div>
          <div className="text-sm text-gray-500">Patients Today</div>
          <div className="w-full bg-blue-100 rounded-full h-1 mt-2">
            <div className="bg-blue-500 h-1 rounded-full animate-progress" style={{width: '75%'}}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group animation-delay-100">
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform">5</div>
            <Calendar className="w-5 h-5 text-green-400 group-hover:text-green-600 transition-colors" />
          </div>
          <div className="text-sm text-gray-500">Follow-ups Due</div>
          <div className="w-full bg-green-100 rounded-full h-1 mt-2">
            <div className="bg-green-500 h-1 rounded-full animate-progress animation-delay-200" style={{width: '60%'}}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group animation-delay-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl font-bold text-red-600 group-hover:scale-110 transition-transform">3</div>
            <Heart className="w-5 h-5 text-red-400 group-hover:text-red-600 transition-colors" />
          </div>
          <div className="text-sm text-gray-500">Scheme Applications</div>
          <div className="w-full bg-red-100 rounded-full h-1 mt-2">
            <div className="bg-red-500 h-1 rounded-full animate-progress animation-delay-400" style={{width: '40%'}}></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group animation-delay-300">
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform">8</div>
            <TrendingUp className="w-5 h-5 text-purple-400 group-hover:text-purple-600 transition-colors" />
          </div>
          <div className="text-sm text-gray-500">Insurance Enrollments</div>
          <div className="w-full bg-purple-100 rounded-full h-1 mt-2">
            <div className="bg-purple-500 h-1 rounded-full animate-progress animation-delay-600" style={{width: '85%'}}></div>
          </div>
        </div>
      </div>

      {/* Main Cards */}
      <div className="grid md:grid-cols-2 gap-6 animate-fade-in animation-delay-500">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group animate-slide-up"
              style={{animationDelay: `${cards.indexOf(card) * 100 + 600}ms`}}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <Icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 group-hover:animate-bounce">
                  <Mic className={`w-5 h-5 ${card.textColor} group-hover:animate-pulse`} />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">{card.title}</h3>
              <p className="text-sm font-medium text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">{card.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{card.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${card.textColor} group-hover:animate-pulse`}>
                    Voice Enabled • हिंदी
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:bg-green-500 group-hover:scale-125 transition-all"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 animate-fade-in animation-delay-1000">
        <h3 className="text-lg font-bold text-gray-800 mb-4 animate-slide-up animation-delay-1100">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="p-3 text-center bg-blue-50 rounded-lg hover:bg-blue-100 hover:scale-105 hover:shadow-md transition-all duration-200 animate-slide-up animation-delay-1200">
            <div className="text-sm font-medium text-blue-700">Emergency Contact</div>
          </button>
          <button className="p-3 text-center bg-green-50 rounded-lg hover:bg-green-100 hover:scale-105 hover:shadow-md transition-all duration-200 animate-slide-up animation-delay-1300">
            <div className="text-sm font-medium text-green-700">Medicine Stock</div>
          </button>
          <button className="p-3 text-center bg-red-50 rounded-lg hover:bg-red-100 hover:scale-105 hover:shadow-md transition-all duration-200 animate-slide-up animation-delay-1400">
            <div className="text-sm font-medium text-red-700">Report Issue</div>
          </button>
          <button className="p-3 text-center bg-purple-50 rounded-lg hover:bg-purple-100 hover:scale-105 hover:shadow-md transition-all duration-200 animate-slide-up animation-delay-1500">
            <div className="text-sm font-medium text-purple-700">Training</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;