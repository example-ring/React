import "./TodoList.css"
import TodoItem from "./TodoItem";

const TodoList = ({todo}) => {

return (
	<div className="TodoList">
 <h4>♡ Todo List ♥</h4>
 <input className="searchbar" placeholder="검색어 입력"></input>
	<div className="list_wrapper"> 
	{todo.map((it) => (
		<TodoItem {...it}></TodoItem>
	))}
	</div>
</div>
);

};
export default TodoList;