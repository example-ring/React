import "./TodoList.css"
import TodoItem from "./TodoItem";
import { useContext, useMemo, useState } from "react";
import { TodoStateContext } from "../App";



const TodoList = () => {
const { todo } = useContext(TodoStateContext);
const [ search, setsearch ] = useState("");

const onChangeSearch = (e) => {
	setsearch(e.target.value)
};

const getSearchResult = () => {
	return search === ""
	? todo
	: todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
}

const analyzeTodo = useMemo(() => {

	const totalCount = todo.length;
	const doneCount = todo.filter((it) => it.isDone).length;
	const notDoneCount = totalCount - doneCount;

	return {
		totalCount,
		doneCount,
		notDoneCount,
	};


}, [todo]);

const { totalCount, doneCount, notDoneCount } = analyzeTodo;

return (
	<div className="TodoList">
 <h4>♡ To do List ♥</h4>
<div>
	<div>총 개수: {totalCount}</div>
	<div>완료된 할 일: {doneCount}</div>
	<div>아직 완료되지 못한 할 일: {notDoneCount}</div>
</div>

 <input 
	value={search}
	onChange={onChangeSearch}
 className="searchbar" placeholder="검색어 입력"></input>
	<div className="list_wrapper"> 
	{getSearchResult().map((it) => (
		<TodoItem key={it.id} {...it}></TodoItem>
	))}
	</div>
</div>
);



};

TodoList.defaultProps = {
	todo: [],
 };


export default TodoList;