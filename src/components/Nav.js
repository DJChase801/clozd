import React from "react";

const Nav = ({onClick, onChange}) => {
  return (
    <div>
      <label style={{marginRight: '10px'}}>Search by last name:</label>
      <input type="text" name="lastName" autoComplete="off" onChange={(e) => onChange(e.target.value)}/>
      <div className="nav-buttons" style={{marginTop: '15px'}}>
      <label style={{marginRight: '10px'}}>Search by section of last names:</label>
        <button onClick={() => onClick('All')}>Show All Users</button>
        <button onClick={() => onClick(['A', 'B', 'C'])}>A - C</button>
        <button onClick={() => onClick(['D', 'E', 'F'])}>D - F</button>
        <button onClick={() => onClick(['G', 'H', 'I'])}>G - I</button>
        <button onClick={() => onClick(['J', 'K', 'L'])}>J - L</button>
        <button onClick={() => onClick(['M', 'N', 'O'])}>M - O</button>
        <button onClick={() => onClick(['P', 'Q', 'R'])}>P - R</button>
        <button onClick={() => onClick(['S', 'T', 'U'])}>S - U</button>
        <button onClick={() => onClick(['V', 'W', 'X', 'Y', 'Z'])}>V - Z</button>
      </div>
    </div>
  );
};

export default Nav;
