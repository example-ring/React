import './App.css';
import { useState } from "react";
import Header from "./TodoProject/Header";
import TodoEditor from "./TodoProject/TodoEditor";
import TodoList from "./TodoProject/TodoList";

//임시 데이터 넣기

const mokTodo = [

{

	id: 0,
	isDone:false,
	content: "React To do UI 구현",
	createdDate: new Date().getTime(),

}, {

	id: 1,
	isDone:false,
	content: "React To do 기능 구현",
	createdDate: new Date().getTime(),

} , {

	id: 2,
	isDone:false,
	content: "React 새 프로젝트",
	createdDate: new Date().getTime(),

}


];

function App () {

	const [todo, setdo] = useState(mokTodo);
	return (

	<div className="App">
	<Header></Header>
	<TodoEditor></TodoEditor>
	<TodoList></TodoList>
	</div>
		
	);
}
export default App;

// import { useState } from 'react';
// import Controller from './Component2/Controller';
// import Viewer from "./Component2/Viewer"

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


// function App() {
 
//   const [count, setCount] = useState(0);
//   const handleSetCount = (value) => {
//     setCount(count + value);
//   };
 
 
//   return (
//     <div className="App">
//       <h1>Simple Counter Practice</h1>
//       <section>
//         <Viewer count = {count}></Viewer>
//       </section>
//       <section>
//         <Controller handleSetCount = {handleSetCount}></Controller>
//       </section>
//     </div>
//   );
// }

// export default App;