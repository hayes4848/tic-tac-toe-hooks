import React from 'react';


const Cell = (props) => {
	return(
		<div className="cell-container" onClick={props.sendUpdate}>
			<span className="cell-value">{props.cell}</span>
		</div>
	)
}

export default Cell