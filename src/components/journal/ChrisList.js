import React, { useEffect, useState } from 'react';
import { Col, Container, CardGroup, Card, CardDeck } from 'react-bootstrap';
import { getAll } from './../../modules/APICalls';
import firebase from "firebase";

export const ChrisList = () => {

	const [journalArray, setJournalArray] = useState([])


	useEffect(() => {
		getAll()
			.then(data => {
				// since our data is returned with a unique key, we need to add it to the object. 
				//use Object.keys
				//take a look at the data prior to map
				console.log("fb data", data);
				let arrayWithFBID = Object.keys(data).map((key, index) => {
					data[key].fbid = key;
                     return data[key];
				  });
				  //now take a look after
				console.log("arrayWithFBID", arrayWithFBID);
				setJournalArray(arrayWithFBID)
			})
	}, [])

	const colorArray = ['Secondary', 'Success','Danger','Warning','Info']

	let colorCount = 0;

	const cyleBackgroundColor = () => {
		const variant = colorArray[colorCount];
		colorCount < colorArray.length ? colorCount++ : colorCount = 0;
		console.log('variant', variant.toLowerCase())
		return variant.toLowerCase()
	}

	//date info: https://www.tutorialspoint.com/es6/es6_date.htm
	//<Card key={item.fbid} className="bgcolor" className="mb-2">

	return (
		<>
			
			<Container fluid="xl">
			<h5 text="dark">{firebase.auth().currentUser.displayName.split(" ")[0]}'s List</h5>
			<Col m-2>
				{
					journalArray.map(item => {
						
						return (
							<Card bg={cyleBackgroundColor()} key={item.fbid} className="mb-2 text-white">
								<Card.Body >
								<Card.Title>{item.title}</Card.Title>
								<Card.Subtitle className="mb-2">Date added: <strong>{item.timestamp && new Date(item.timestamp).toLocaleDateString()}</strong></Card.Subtitle>
								<Card.Text>
									Description: <strong>{item.details}</strong>
								</Card.Text>
								</Card.Body>
							</Card>
							
							
						)
					})
					
				}
					
				</Col>
			</Container>
		</>
	)
}