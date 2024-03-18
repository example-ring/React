import React from "react";

function Book (props) {

	return (

		<div>
			<h1>{`This book's name is ${props.name}`}</h1>
			<h2>{`This book consists of ${props.numberOfPage} pages in total`}</h2>
		</div>

	);

} 

export default Book;