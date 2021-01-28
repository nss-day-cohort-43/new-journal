import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

export const ChrisItem = ({item, bgcolor, iGotIt}) => {

	//controls the clickable-ness of the checkbox
	const [isLoading, setIsLoading] = useState(true);

	const handleGotIt = (event) => {
		setIsLoading(true);
		//make a copy of original data
		const updatedItem = {...item}
		//set value to opposite
		updatedItem.gotIt = updatedItem.gotIt ? false : true;
		//invoke function on parent
		//why is it on the parent? So that when it finishes the update,
		//we can invoke getAll and update the ChrisList state
		iGotIt(updatedItem)
	
	}

	useEffect(() => {
		setIsLoading(false)
	},[item])


	//date info: https://www.tutorialspoint.com/es6/es6_date.htm
	return (
		
		<Card bg={bgcolor} className="mb-2 text-white">
			<Card.Body >
				<Card.Title>{item.title}</Card.Title>
				<Card.Subtitle>Date added: <strong>{item.timestamp && new Date(item.timestamp).toLocaleDateString()}</strong></Card.Subtitle>
				<Card.Text>
					Description: <strong>{item.details}</strong>
				</Card.Text>
			</Card.Body>
			<Card.Body className="text-right">

				<input id={`cb-${item.fbid}`} type='checkbox' className="mycheck" onChange={handleGotIt} checked={item.gotIt} disabled={isLoading}/>
				<label htmlFor={`cb-${item.fbid}`}>I got it!</label>
			</Card.Body>
		</Card>
	)
}