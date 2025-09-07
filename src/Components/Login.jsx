import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Heart, Shield, Users } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Full screen glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-br from-blue-200/30 via-white/40 to-blue-300/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-[500px] h-[500px] bg-white/30 rounded-full blur-3xl animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100/25 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Glassmorphism card */}
          <div className="backdrop-blur-xl bg-white/40 rounded-3xl p-8 shadow-2xl border border-white/50 animate-fade-in">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-4 border border-blue-300/40">
                  <Heart className="w-8 h-8 text-blue-700" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-blue-800 mb-2">ASHA Workers</h1>
              <p className="text-blue-700/80 text-sm">आशा कार्यकर्ता पोर्टल</p>
              <p className="text-blue-600/70 text-xs mt-1">Accredited Social Health Activist Portal</p>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-blue-600/70" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username / उपयोगकर्ता नाम"
                  className="w-full pl-12 pr-4 py-4 bg-white/30 backdrop-blur-sm border border-blue-200/50 rounded-2xl text-blue-800 placeholder-blue-600/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Password field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-600/70" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password / पासवर्ड"
                  className="w-full pl-12 pr-12 py-4 bg-white/30 backdrop-blur-sm border border-blue-200/50 rounded-2xl text-blue-800 placeholder-blue-600/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-600/70 hover:text-blue-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Login button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-blue-500/30 backdrop-blur-sm border border-blue-300/50 rounded-2xl text-blue-800 font-semibold hover:bg-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-blue-600/30 border-t-blue-700 rounded-full animate-spin"></div>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  'Login / लॉग इन करें'
                )}
              </button>
            </form>

            {/* Features showcase */}
            <div className="mt-8 pt-6 border-t border-blue-200/30">
              <p className="text-blue-700/80 text-sm text-center mb-4">Portal Features / पोर्टल सुविधाएं</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-blue-100/30 backdrop-blur-sm rounded-full p-2 border border-blue-200/40">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-blue-600/80 text-xs">Patient Management</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-blue-100/30 backdrop-blur-sm rounded-full p-2 border border-blue-200/40">
                    <Heart className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-blue-600/80 text-xs">Health Schemes</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-blue-100/30 backdrop-blur-sm rounded-full p-2 border border-blue-200/40">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-blue-600/80 text-xs">Insurance</span>
                </div>
              </div>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 p-4 bg-blue-100/20 backdrop-blur-sm rounded-2xl border border-blue-200/40">
              <p className="text-blue-700/80 text-xs text-center mb-2">Demo Credentials:</p>
              <p className="text-blue-600/80 text-xs text-center">Username: asha_worker</p>
              <p className="text-blue-600/80 text-xs text-center">Password: demo123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
