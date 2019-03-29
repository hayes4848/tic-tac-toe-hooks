import React from 'react';
import './row.css'
import Cell from './cell'

const Row = (props) => {

	return(
		<div className="row-container">
			{props.row.map( (cell, index) => {
				return <Cell key={index} sendUpdate={() => {props.updateGame(props.rowIndex, index)} } cell={cell} />
			})}
		</div>
	)
}

export default Row