import * as React from 'react';
import style from './hungerVal.css';

export default function HungerVal(props) {
	const { hungerVal } = props

	return (
		<div className='hunger-val-container'>{hungerVal}</div>
	)
};