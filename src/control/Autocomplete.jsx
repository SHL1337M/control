import React from 'react';

const Autocomplete = ({ values, onInputChange, selectedValue }) => {
  return (
    <>
      <input
        type="text"
        value={selectedValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <ul>
        {values
          .filter((value) => value.includes(selectedValue))
          .map((value, index) => (
            <li key={index}>{value}</li>
          ))}
      </ul>
    </>
  );
};

export default Autocomplete;
