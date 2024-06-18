import React, { useReducer, useRef, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
	switch(action.type) {

		case "INIT": {
		
			return action.data;
		}

		case "CREATE": {
			const newState = [action.data, ...state];
			localStorage.setItem("diary", JSON.stringify(newState));
			return newState;
		}

		case "UPDATE": {
			const newState = state.map((it) => String(it.id) === String(action.data.id) ? {...action.data} : it);
			localStorage.setItem("diary", JSON.stringify(newState));
			return newState;
		}

		case "DELETE": {
			const newState = state.filter((it) => String(it.id) !==
		String(action.targetId));
		localStorage.setItem("diary", JSON.stringify(newState));
		return newState;
		}
		default: {
			return state;
		}
	}
}


function App() {

	const [isDataLoaded] = useState(false);
	const [data, dispatch, setIsDataLoaded] = useReducer(reducer, []);
	const idRef = useRef(0);

	useEffect(() => {
		const rawData = localStorage.getItem("diary");
		if (!rawData) {
			setIsDataLoaded(true);
			return;
		}
		const localData = JSON.parse(rawData);
		if (localData.length === 0) {
			setIsDataLoaded(true);
			return;
		}

		localData.sort((a, b) => Number(b.id) - Number(a.id));
		idRef.current = localData[0].id + 1;

		dispatch({type: "INIT", data: localData});
		setIsDataLoaded(true);
	}, []);

	const onCreate = (date, content, emotionId) => {
		dispatch({
			type: "CREATE",
			data: {
				id: idRef.current,
				date: new Date(date).getTime(),
				content,
				emotionId,
			},

		});
		idRef.current += 1;
	};

	const onUpdate = (targetId, date, content, emotionId) => {
		dispatch({
			type: "UPDATE",
			data: {
				id: targetId,
				date: new Date(date).getTime(),
				content,
				emotionId,
			},
		});
	};

	const onDelete = (targetId) => {
		dispatch({
			type: "DELETE",
			targetId,
		});
	};

	const mockData = [
		{
			id: "mock1",
			date: new Date().getTime() -1,
			content: "mock1",
			emotionId: 1,
		},
		{
			id: "mock2",
			date: new Date().getTime() -2,
			content: "mock2",
			emotionId: 2,
		},
		{
			id: "mock3",
			date: new Date().getTime() -3,
			content: "mock3",
			emotionId: 3,
		},

	];

	if (!isDataLoaded) {
		return <div>데이터를 불러오는 중입니다...</div>;
	} else {
		return (
			<DiaryStateContext.Provider value={data}>
				<DiaryDispatchContext.Provider
				value={{
					onCreate,
					onUpdate,
					onDelete,
				}}
				>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/new" element={<New></New>}></Route> 
					<Route path="/diary/:id" element={<Diary></Diary>}></Route>
					<Route path="/edit/:id" element={<Edit></Edit>}></Route>
				</Routes>
			</div>
			</DiaryDispatchContext.Provider>
			</DiaryStateContext.Provider>
			);
	}
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
