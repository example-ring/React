import "./TodoList.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({todo, onUpdate, onDelete }) => {

const [ search, setsearch ] = useState("");
const onChangeSearch = (e) => {
	setsearch(e.target.value)
};

const getSearchResult = () => {
	return search === ""
	? todo
	: todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
}

return (
	<div className="TodoList">
 <h4>♡ To do List ♥</h4>
 <input 
	value={search}
	onChange={onChangeSearch}
 className="searchbar" placeholder="검색어 입력"></input>
	<div className="list_wrapper"> 
	{getSearchResult().map((it) => (
		<TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}></TodoItem>
	))}
	</div>
</div>
);

};
export default TodoList;