import React, { useState, useEffect } from 'react';

// Common Loading Page Component
const LoadingPage = ({ fact }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-lg p-8 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 border-t-4 border-blue-400 rounded-full animate-spin"></div>
          </div>
        </div>
        
        <div className="h-24 mb-6"></div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Generating Your Summary
        </h2>
        
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 transform transition-all hover:scale-105">
          <p className="text-base text-gray-600 italic font-light leading-relaxed">
            "{fact}"
          </p>
          <p className="mt-3 text-sm text-gray-500">Did you know?</p>
        </div>
      </div>
    </div>
  );
};

// Input Page Component
const Sum = () => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fact, setFact] = useState('');

  const ECOMMERCE_FACTS = [
    "In 2023, global e-commerce sales were estimated to reach over $6.3 trillion worldwide.",
    "Amazon sells more than 4,000 items per minute during peak shopping hours.",
    "Mobile commerce (m-commerce) is projected to account for 72.9% of total e-commerce sales by 2024.",
    "The average cart abandonment rate in e-commerce is around 69.99%.",
    "China is the largest e-commerce market in the world, accounting for over 50% of global e-commerce transactions."
  ];

  const getRandomFact = () => ECOMMERCE_FACTS[Math.floor(Math.random() * ECOMMERCE_FACTS.length)];

  const handleSummarize = () => {
    if (inputText.trim()) {
      setFact(getRandomFact());
      setIsLoading(true);
      // Store the input text in localStorage or sessionStorage
      sessionStorage.setItem('summaryText', inputText);
      // Simulate loading then redirect
      setTimeout(() => {
        window.location.href = '/Sumresult';
      }, 3000);
    }
  };

  if (isLoading) {
    return <LoadingPage fact={fact} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Text Summarizer
            </h1>
            
            <div className="space-y-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here to summarize..."
                className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700 text-sm"
              ></textarea>
              
              <div className="flex justify-center">
                <button
                  onClick={handleSummarize}
                  disabled={!inputText.trim()}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transform transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Summarize Text
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Sum;