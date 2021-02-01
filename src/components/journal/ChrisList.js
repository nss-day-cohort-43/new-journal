import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { getAll, updateItem, deleteItem } from './../../modules/APICalls';
import firebase from "firebase";
import { ChrisItem } from "./ChrisItem"

export const ChrisList = () => {

	const [journalArray, setJournalArray] = useState([])

	const iGotIt = (item) => {
		updateItem(item)
			.then(() => {
				getAllJournalEntries();
			});

	}

	const deleteThisItem = (fbid) => {
		deleteItem(fbid)
			.then(status => {
				if (status === 200){
					getAllJournalEntries();
				}else {
					console.log("oops, error here")
				}
			})
	}

	const getAllJournalEntries = () => {
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
				//and sort with most recent date first
				arrayWithFBID.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
				setJournalArray(arrayWithFBID)
			})
	}

	useEffect(() => {
		getAllJournalEntries()
	}, [])

	//cycle through the colors for each card
	const colorArray = ['Secondary', 'Success', 'Danger', 'Warning', 'Info']

	let colorCount = 0;

	const cyleBackgroundColor = () => {
		const variant = colorArray[colorCount];
		colorCount < colorArray.length - 1 ? colorCount++ : colorCount = 0;
		return variant.toLowerCase()
	}


	return (
		<>

			<Container fluid="xl">
				<h5 className="username">{firebase.auth().currentUser.displayName.split(" ")[0]}'s List</h5>
				<Col className="m-2">
					{
						journalArray.map(item => {
							const mybgcolor = cyleBackgroundColor();

							return (
								<ChrisItem item={item} bgcolor={mybgcolor} key={item.fbid} iGotIt={iGotIt} deleteThisItem={deleteThisItem} />


							)
						})

					}

				</Col>
			</Container>
		</>
	)
}