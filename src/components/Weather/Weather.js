import React, { useState } from "react";

export default function Weather() {
  const [input, setInput] = useState("");
  const [dispName, setDispName] = useState("");

  const dispCityName = () => {
    setDispName(input);
  };

  return (
    <div>
      <h1 data-testid="header">Weather App</h1>
      <input
        data-testid="city-name-input"
        defaultValue=""
        onChange={(e) => {
          e.preventDefault();
          setInput(e.target.value);
        }}
      ></input>

      <button data-testid="search-btn" onClick={dispCityName}>
        Search
      </button>
      <h1 data-testid="city-name-disp">{dispName}</h1>
    </div>
  );
}
