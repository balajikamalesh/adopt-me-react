import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setstate] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={(e) => setstate(e.target.value)}
          onBlur={(e) => setstate(e.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </label>
    );
  };

  return [state, dropdown, setstate];
};

export default useDropdown;
