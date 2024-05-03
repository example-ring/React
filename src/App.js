import "./App.css";
import { getEmotionImgById } from "./util";

function App() {
	return (
	<div className="App">
		<img alt="감정 1" src={getEmotionImgById(1)}></img>
		<img alt="감정 2" src={getEmotionImgById(2)}></img>
		<img alt="감정 3" src={getEmotionImgById(3)}></img>
		<img alt="감정 4" src={getEmotionImgById(4)}></img>
		<img alt="감정 5" src={getEmotionImgById(5)}></img>
	</div>
	);
}

export default App;






// *** To do 앱 만들기 ***

// import './App.css';
// import TestComp from './TodoProject/TestComp';
// import React, { useMemo, useCallback, useReducer, useRef } from "react";
// import Header from "./TodoProject/Header";
// import TodoEditor from "./TodoProject/TodoEditor";
// import TodoList from './TodoProject/TodoList';

// export const TodoStateContext = React.createContext();
// export const TodoDispatchContext = React.createContext();



// function reducer(state, action) {
// 	switch (action.type) {
// 		case "CREATE": {
// 			return [action.newItem, ...state];
// 		}

// 		case "UPDATE": {
// 			return state.map((it) => 
// 				it.id === action.targetId ? {
// 					...it, 
// 					isDone: !it.isDone,
// 				}
// 				: it
// 		);
// 	}


// 		case "DELETE": {
// 			return state.filter((it) => it.id !==action.targetId);
// 		}

// 	default: 
// 		return state;

// 		}

		
// 	} 

// 	const mockTodo = [
// 		{
// 			id: 0,
// 			isDone: false,
// 			content: "임시 데이터",
// 			createdDate: new Date().getTime(),
			
// 		},
// 		{
// 			id: 1,
// 			isDone: false,
// 			content: "임시 데이터1",
// 			createdDate: new Date().getTime(),
// 		},
// 		{
// 			id: 2,
// 			isDone: false,
// 			content: "임시 데이터2",
// 			createdDate: new Date().getTime(),
// 		},
// 		{
// 			id: 3,
// 			isDone: false,
// 			content: "임시 데이터3",
// 			createdDate: new Date().getTime(),
// 		},

// 	];
	



// function App () {

// 	const [todo, dispatch] = useReducer(reducer, mockTodo);
// 	const idRef = useRef(3);

// 	const onCreate = useCallback((content) => {

// 		dispatch({
// 			type: "CREATE",
// 			newItem: {
// 				id: idRef.current,
// 				content,
// 				isDone: false,
// 				createdDate: new Date().getTime(),

// 			},
// 		});
// 		idRef.current += 1;

// 	},[]);

// const onUpdate = useCallback((targetId) => {

// 	dispatch ({
// 		type: "UPDATE",
// 		targetId,
// 	});
			
// },[]);

// const onDelete = useCallback((targetId) => {
// 	dispatch({
// 		type: "DELETE",
// 		targetId,
// 	});

// },[]);


// 	const memoizedDispatches = useMemo(() => {
// 		return {onCreate, onUpdate, onDelete}
// 	}, []);


// 	return (

// 		<div className="App">
			
// 			<TestComp></TestComp>
// 			<Header></Header>
// 			<TodoStateContext.Provider value={todo}></TodoStateContext.Provider>
// 			<TodoDispatchContext.Provider value={memoizedDispatches}>
// 			<TodoEditor></TodoEditor>
// 			<TodoList></TodoList>
// 			</TodoDispatchContext.Provider>

// 		</div>

// 	);

// }

// export default App;


//  *** 컴포넌트 나누기 ***


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
