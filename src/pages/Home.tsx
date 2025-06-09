import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Palette, Zap, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Professional Templates',
      description: 'Choose from dozens of beautifully designed resume templates crafted by professionals.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Easy Customization',
      description: 'Customize colors, fonts, and layouts with our intuitive drag-and-drop editor.',
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: 'Instant Download',
      description: 'Download your resume in high-quality PDF format instantly and for free.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      content: 'Cwix helped me land my dream job! The templates are professional and easy to customize.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      content: 'The best resume builder I\'ve used. Clean interface and beautiful templates.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Designer',
      content: 'Love the variety of templates and how easy it is to create a professional resume.',
      rating: 5,
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(152deg, rgba(8,0,0,1) 0%, rgba(106,78,205,1) 67%, rgba(46,43,43,1) 100%)"
      }}
    >
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build Your Dream
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {' '}  Resume in Minutes
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed text-opacity-50 ">
              Build a professional resume in minutes with our easy-to-use templates. 
              Stand out from the competition with designs that get you noticed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/templates"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Explore</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Cwix?
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto text-opacity-50">
              We've made resume building simple, fast, and professional. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Home;