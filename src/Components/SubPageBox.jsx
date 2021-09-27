import React from "react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

function SubPageBox(props) {
	const color = "#"+props.color1;
	const icon = function (name){
		if(name === "LibraryBooksIcon"){
			return (<LibraryBooksIcon className="Icons"/>);
		}
		else if(name === "ChromeReaderModeIcon"){
			return (<ChromeReaderModeIcon className="Icons"/>);
		}
		else if(name === "DevicesOtherIcon"){
			return (<DevicesOtherIcon className="Icons"/>);
		}
	}
	const subclassname="subpagebox__";
	const subclassname1="subpagetitle__";
	const subclassname2="subpagetext__";
	
	return(
		<div style={{backgroundColor:color}} className={subclassname.concat(props.subid)}>
			{icon(props.name)}
			<h2 className={subclassname1.concat(props.subid)}>{props.subtitle}</h2>
			<p className={subclassname2.concat(props.subid)}>{props.subdesc}</p>
		</div>
	);
}
export default SubPageBox;