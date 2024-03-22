import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, initialSelectedOption }) => {
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      {/* Display selected option */}
      <button
        className="bg-gray-800 text-white py-1 px-4 rounded inline-flex justify-between items-center focus:outline-none w-40"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <svg
          className={`ml-1 fill-current h-4 w-4 transition-transform transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <ul
        className={`absolute ${
          isOpen ? 'block' : 'hidden'
        } bg-gray-800 text-white py-1 z-1 w-40  rounded-md shadow-lg`}
        
      >
        {options.map((option) => (
          <li key={option}>
            <button
              onClick={() => selectOption(option)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none ${
                selectedOption === option ? 'bg-gray-700' : ''
              }`}
            >
              {option}{' '}
              {selectedOption === option && <span className="float-right">✔</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
