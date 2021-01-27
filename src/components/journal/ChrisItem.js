import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { updateGotIt } from './../../modules/APICalls';

export const ChrisItem = ({item, bgcolor}) => {
	

	const [gotIt, setGotIt] = useState(item.gotIt || false);

	const handleGotIt = (event) => {
		const itemFBID = event.target.id.split("--")[1];
		setGotIt(gotIt ? false : true);
		item.gotIt = gotIt ? false : true;
		console.log("item", item);

		// updateGotIt(itemFBID, {gotIt:gotIt})
	}




	const [listItem, setListItem] = useState({item});

	const handleGotIt = (event) => {
		const itemFBID = event.target.id.split("--")[1];
		item.gotIt = item.gotIt ? false : true;
		updateGotIt(item);
		
	}


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

				<input id={`cb-${item.fbid}`} type='checkbox' className="mycheck" onChange={handleGotIt} checked={item.gotIt} />
				<label htmlFor={`cb-${item.fbid}`}>I got it!</label>

			</Card.Body>
		</Card>
	)
}