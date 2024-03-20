import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>♬°⋆오늘의 To do⋆°♬ volυмe : ▁▂▃▄▅▆▇▉</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
