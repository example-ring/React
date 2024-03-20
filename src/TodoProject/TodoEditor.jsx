import "./TodoEditor.css";

const TodoEditor = () => {

	return (
		<div className="TodoEditor">
		<h4>♡ 새로운 To do 작성하기 ♥</h4>
		<div className="editor_wrapper">
			<input placeholder="새로운 To do"></input>
			<button>추가</button>
		</div>
		</div>
	);
	

};

export default TodoEditor;