import React from "react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function SubPageBox(props) {
	const subclassname="subpagebox__";
	const subclassname1="subpagetitle__";
	const subclassname2="subpagetext__";
	return(
		<div className={subclassname.concat(props.subid)}>
			<h2 className={subclassname1.concat(props.subid)}>{props.subtitle}</h2>
			<p className={subclassname2.concat(props.subid)}>{props.subdesc}</p>
			{/* <{props.name} /> */}
		</div>
	);
}
export default SubPageBox;