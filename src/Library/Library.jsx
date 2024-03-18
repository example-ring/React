import React from "react";
import Book from "./Book"

function Library(props) {

	return (

		<div>
			<Book name="처음 만난 파이썬" numOfPage={318}></Book>
			<Book name="처음 만난 리액트" numOfPage={418}></Book>
		</div>

	);

}
export default Library;