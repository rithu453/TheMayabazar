import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Load = () => {
  const [displayText, setDisplayText] = useState('');
  const navigate = useNavigate();
  
  const facts = [
    "India's eCommerce market is expected to reach $200 billion by 2026.",
    "Around 70% of eCommerce transactions in India are made through mobile phones.",
    "India has over 900 million internet users, making it one of the largest markets for eCommerce.",
    "The number of online shoppers in India reached around 150 million in 2023.",
    "Fashion and apparel is the largest category in Indian eCommerce, followed by electronics and groceries.",
    "Digital payments, including UPI and wallets, are rapidly growing in India, making online shopping more accessible.",
    "Flipkart and Amazon dominate the Indian eCommerce market, followed by Myntra, Snapdeal, and BigBasket.",
    "Tier 2 and Tier 3 cities are increasingly adopting eCommerce, contributing to the market's growth.",
    "The Digital India initiative has boosted cashless transactions and increased online shopping adoption.",
    "By 2025, rural India is expected to contribute 30-35% of the total online shoppers in India.",
  ];

  useEffect(() => {
    // Select a random fact once when component mounts
    const selectedFact = facts[Math.floor(Math.random() * facts.length)];
    const textLength = selectedFact.length;
    const timePerChar = 10000 / textLength; // Distribute 10 seconds across all characters

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= textLength) {
        setDisplayText(selectedFact.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, timePerChar);

    // Navigation timeout
    const timeoutId = setTimeout(() => {
      const previousPage = document.referrer;
      if (previousPage.includes('/summarize')) {
        navigate('/sumresult');
      } else {
        navigate('/compres');
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  const generateCubes = () => {
    const cubes = [];
    for (let h = 1; h <= 3; h++) {
      for (let w = 1; w <= 3; w++) {
        for (let l = 1; l <= 3; l++) {
          cubes.push({ h, w, l });
        }
      }
    }
    return cubes;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="w-full max-w-lg p-8 text-center">
        <div className="relative h-64 mb-6">
          <div className="container">
            <style jsx>{`
              .container {
                position: relative;
                height: 100px;
                width: 86px;
                transform: scale(0.5);
                transform-origin: center center;
                margin: 100px auto;
              }

              .cube {
                position: absolute;
                width: 86px;
                height: 100px;
              }

              .face {
                height: 50px;
                width: 50px;
                position: absolute;
                transform-origin: 0 0;
              }

              .right {
                background: #E79C10;
                transform: rotate(-30deg) skewX(-30deg) translate(49px, 65px) scaleY(0.86);
              }

              .left {
                background: #D53A33;
                transform: rotate(90deg) skewX(-30deg) scaleY(0.86) translate(25px, -50px);
              }

              .top {
                background: #1d9099;
                transform: rotate(210deg) skew(-30deg) translate(-75px, -22px) scaleY(0.86);
                z-index: 2;
              }

              ${generateCubes().map(({h, w, l}) => `
                .h${h}.w${w}.l${l} {
                  z-index: -${h};
                  animation: h${h}w${w}l${l} 3s ease infinite;
                }

                @keyframes h${h}w${w}l${l} {
                  0% {
                    transform: translate(${(w * -50 - 50) + (l * 50 + 50)}%, ${(h * 50 - 200) + (w * 25 - 25) + (l * 25 + 25)}%);
                  }
                  14% {
                    transform: translate(${(w * -50 - 50) + (l * 100 - 50)}%, ${(h * 50 - 200) + (w * 25 - 25) + (l * 50 - 25)}%);
                  }
                  28% {
                    transform: translate(${(w * -100 + 50) + (l * 100 - 50)}%, ${(h * 50 - 200) + (w * 50 - 75) + (l * 50 - 25)}%);
                  }
                  43% {
                    transform: translate(${(w * -100 - 100) + (l * 100 + 100)}%, ${(h * 100 - 400) + (w * 50 - 50) + (l * 50 + 50)}%);
                  }
                  57% {
                    transform: translate(${(w * -100 - 100) + (l * 50 + 200)}%, ${(h * 100 - 400) + (w * 50 - 50) + (l * 25 + 100)}%);
                  }
                  71% {
                    transform: translate(${(w * -50 - 200) + (l * 50 + 200)}%, ${(h * 100 - 375) + (w * 25 - 25) + (l * 25 + 100)}%);
                  }
                  85%, 100% {
                    transform: translate(${(w * -50 - 50) + (l * 50 + 50)}%, ${(h * 50 - 200) + (w * 25 - 25) + (l * 25 + 25)}%);
                  }
                }
              `).join('\n')}

              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }

              .cursor {
                display: inline-block;
                width: 2px;
                height: 1em;
                background-color: white;
                margin-left: 2px;
                animation: blink 1s step-end infinite;
                vertical-align: middle;
              }
            `}</style>

            {generateCubes().map(({h, w, l}, index) => (
              <div key={index} className={`cube h${h} w${w} l${l}`}>
                <div className="face top"></div>
                <div className="face left"></div>
                <div className="face right"></div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-4">
          Generating Your Summary
        </h2>

        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 transform transition-all hover:scale-105">
          <p className="text-base text-white/90 italic font-light leading-relaxed">
            {displayText}
            <span className="cursor"></span>
          </p>
          <p className="mt-3 text-sm text-white/60">Did you know?</p>
        </div>
      </div>
    </div>
  );
};

export default Load;