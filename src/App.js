import './App.css';
import {useRef, useState} from "react";
import Header from "./TodoProject/Header";
import TodoEditor from "./TodoProject/TodoEditor";
import TodoList from "./TodoProject/TodoList";



function App () {

	const [todo, setodo] = useState([]);
	const idRef = useRef(3);

	const onCreate = (content) => {

		const newItem = {

			id: idRef.current,
			content,
			isDone: false,
			createdDate: new Date().getTime(),
		};
		setodo([newItem, ...todo]);
		idRef.current += 1;

	};

	return (

		<div className="App">
			<Header></Header>
			<TodoEditor onCreate={onCreate}></TodoEditor>
			<TodoList todo={todo}></TodoList>
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