import React from "react";

const Header = () => {
  console.log("Header 업데이트"); //Header 컴포넌트 호출, 리렌더될 때마다 콘솔에 출력
  return (
    <div className="Header">
      <h3>♬°⋆오늘의 To do⋆°♬ volυмe : ▁▂▃▄▅▆▇▉</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default React.memo(Header);
