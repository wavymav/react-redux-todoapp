import React from 'react';

// Filter Presentational Component
export const Filter = ({ active, children, onFliterClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onFliterClick();
  }

  if (active) {
    return <span>{children}</span>
  }

  return (
    <a style={{color: 'red'}} href='#' onClick={handleClick} >
      {children}
    </a>
  );
};
