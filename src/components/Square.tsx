import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinningSquare: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  const baseClasses = "w-full h-20 text-4xl font-bold flex items-center justify-center rounded-md transition-all duration-200";
  
  const getSquareClasses = () => {
    if (isWinningSquare) {
      if (value === '🐁') {
        return `${baseClasses} bg-gray-200 text-gray-800 border-2 border-gray-500`;
      }
      return `${baseClasses} bg-yellow-200 text-yellow-800 border-2 border-yellow-500`;
    }
    
    if (!value) {
      return `${baseClasses} bg-gray-100 hover:bg-gray-200 cursor-pointer`;
    }
    
    if (value === '🐁') {
      return `${baseClasses} bg-gray-200 text-gray-600`;
    }
    
    return `${baseClasses} bg-yellow-100 text-yellow-600`;
  };

  return (
    <button 
      className={getSquareClasses()}
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
};

export default Square;