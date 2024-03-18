import './App.css';
import { useState } from 'react';
import Controller from './Component2/Controller';
import Viewer from "./Component2/Viewer"

// import Header from "./component/Header";
// import Body from "./component/Body";
// import Footer from "./component/Footer";



// function App() {
// return (
// <div className="App">
// <Header></Header>
// <Body></Body>
// <Footer></Footer>
// </div>
// );
// }

// export default App;


function App() {
 
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
 
 
  return (
    <div className="App">
      <h1>Simple Counter Practice</h1>
      <section>
        <Viewer count = {count}></Viewer>
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount}></Controller>
      </section>
    </div>
  );
}

export default App;