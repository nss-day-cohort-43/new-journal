import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { getAll } from '../modules/APICalls';

export const ChrisList = () => {

	const [journalArray, setJournalArray] = useState([])


	useEffect(() => {
		getAll()
			.then(data => {
				setJournalArray(data)
			})
	}, [])



	return (
		<>
			<h4>Christmas List</h4>
			<Container fluid>
			<Row>
			{
				journalArray.map(item => {
					return (
						<Col xs={12} md={6} lg={4} xl={2} className="bkgcolor">
						<h5 key={item.id}>{item.title}</h5>
						</Col>
					)
				})
			}
			</Row>
			</Container>
		</>
	)
}