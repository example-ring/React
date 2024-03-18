import React from "react";
import Comment from "./Comment";

const comments = [

{
 name: "어제",
 comment: "난 하루에 20시간은 쉬어야 하니까",
},

{
	name: "오늘",
	comment: "난 하루에 25시간은 쉬어야 하니까", 
},

{
	name: "다음 주",
	comment: "난 하루에 30시간은 쉬어야 하니까",

},


]

function CommentList (props) {

return (

	<div>
		{comments.map((comm) => {

			return (
				<Comment name={comm.name} comment={comm.comment}></Comment>
			);

		})}

	</div>
);

}

export default CommentList;