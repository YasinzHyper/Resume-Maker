import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Download, Star } from 'lucide-react';

const Templates = () => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern Professional',
      description: 'Clean and contemporary design perfect for tech and creative roles',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Professional',
      rating: 4.9,
      downloads: '15.2k',
    },
    {
      id: 'executive',
      name: 'Executive Elite',
      description: 'Sophisticated template for senior positions and executive roles',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Executive',
      rating: 4.8,
      downloads: '12.1k',
    },
    {
      id: 'creative',
      name: 'Creative Spark',
      description: 'Bold and artistic design for designers and creative professionals',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Creative',
      rating: 4.9,
      downloads: '18.3k',
    },
    {
      id: 'minimal',
      name: 'Minimal Clean',
      description: 'Simple and elegant design that lets your content shine',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Minimal',
      rating: 4.7,
      downloads: '9.8k',
    },
    {
      id: 'academic',
      name: 'Academic Scholar',
      description: 'Traditional format perfect for academic and research positions',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Academic',
      rating: 4.6,
      downloads: '7.5k',
    },
    {
      id: 'startup',
      name: 'Startup Spirit',
      description: 'Dynamic template for startup environments and entrepreneurial roles',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Startup',
      rating: 4.8,
      downloads: '11.2k',
    },
  ];

  const categories = ['All', 'Professional', 'Executive', 'Creative', 'Minimal', 'Academic', 'Startup'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div
      className="min-h-screen py-12 pt-32" 
      style={{
        background: "linear-gradient(152deg, rgba(8,0,0,1) 0%, rgba(106,78,205,1) 67%, rgba(46,43,43,1) 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose Your Perfect Template
          </h1>
          <p className="text-lg text-white text-opacity-70 max-w-2xl mx-auto">
            Select from our collection of professionally designed resume templates. 
            Each template is crafted to help you stand out and get noticed by employers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-300 hover:border-blue-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
            >
              {/* Template Preview */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-64">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <h3 className="font-semibold text-gray-800 mb-1">{template.name}</h3>
                      <p className="text-sm text-gray-600">Resume Template</p>
                    </div>
                  </div>
                </div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button className="bg-white/90 text-gray-800 p-2 rounded-lg hover:bg-white transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <Link
                      to={`/builder/${template.id}`}
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {template.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{template.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {template.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {template.downloads} downloads
                  </span>
                  <Link
                    to={`/builder/${template.id}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    Use Template
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              No templates found for the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;