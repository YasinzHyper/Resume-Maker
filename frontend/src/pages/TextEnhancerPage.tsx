import React, { useState } from 'react';
import TextEnhancer from '../components/TextEnhancer';

type SectionType = 'general' | 'summary' | 'experience' | 'skills' | 'education' | 'projects';

const TextEnhancerPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<SectionType>('general');

  const sectionOptions = [
    { value: 'general', label: 'General Text', description: 'Enhance any text for better clarity and grammar' },
    { value: 'summary', label: 'Professional Summary', description: 'Improve your professional summary' },
    { value: 'experience', label: 'Work Experience', description: 'Enhance work experience bullet points' },
    { value: 'skills', label: 'Skills Section', description: 'Improve skills presentation and organization' },
    { value: 'education', label: 'Education', description: 'Enhance education section' },
    { value: 'projects', label: 'Projects', description: 'Improve project descriptions' }
  ];

  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="px-4 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            AI Text Enhancer
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Transform your text with AI-powered enhancement. Improve clarity, grammar, and professional tone for your resume and other documents.
          </p>
        </div>

        {/* Section Type Selector */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Choose Enhancement Type
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sectionOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedSection(option.value as SectionType)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedSection === option.value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <h3 className="mb-2 font-semibold">{option.label}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Text Enhancer Component */}
        <TextEnhancer
          sectionType={selectedSection}
          placeholder={
            selectedSection === 'general'
              ? 'Enter any text you want to enhance...'
              : `Enter your ${selectedSection} text to enhance...`
          }
        />

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
            Why Use AI Text Enhancement?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Grammar & Clarity</h3>
              <p className="text-gray-600">
                Fix grammatical errors and improve sentence structure for better readability.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Professional Tone</h3>
              <p className="text-gray-600">
                Transform casual language into professional, impactful statements.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Resume Optimized</h3>
              <p className="text-gray-600">
                Specialized enhancement for different resume sections with tailored prompts.
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="p-8 mt-16 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Tips for Best Results
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">✓ Be Specific</h3>
              <p className="text-sm text-gray-600">
                Provide detailed information about your achievements and responsibilities.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">✓ Use Action Words</h3>
              <p className="text-sm text-gray-600">
                Start bullet points with strong action verbs for better impact.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">✓ Include Metrics</h3>
              <p className="text-sm text-gray-600">
                Mention specific numbers, percentages, or quantifiable results when possible.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-800">✓ Review & Refine</h3>
              <p className="text-sm text-gray-600">
                Always review the enhanced text and make any necessary adjustments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEnhancerPage; 