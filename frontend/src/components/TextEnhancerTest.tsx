import React, { useState } from 'react';
import { enhanceText } from '../services/api';

const TextEnhancerTest: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>(null);

  const handleTest = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setApiResponse(null);

    try {
      console.log('Testing API with:', inputText);
      const response = await enhanceText(inputText);
      console.log('Full API response:', response);
      
      setApiResponse(response);
      
      if (response.success && response.enhancedText) {
        setOutputText(response.enhancedText);
        console.log('Setting output text to:', response.enhancedText);
      }
    } catch (error) {
      console.error('Test error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Text Enhancer Test</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Input Text:</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={3}
            className="w-full p-2 border rounded"
            placeholder="Enter text to enhance..."
          />
        </div>

        <button
          onClick={handleTest}
          disabled={isLoading || !inputText.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          {isLoading ? 'Testing...' : 'Test Enhance'}
        </button>

        <div>
          <label className="block text-sm font-medium mb-2">Output Text:</label>
          <textarea
            value={outputText}
            readOnly
            rows={4}
            className="w-full p-2 border rounded bg-gray-50"
            placeholder="Enhanced text will appear here..."
          />
        </div>

        {apiResponse && (
          <div>
            <label className="block text-sm font-medium mb-2">API Response:</label>
            <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextEnhancerTest; 