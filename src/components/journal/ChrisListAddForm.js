import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { addItem } from "./../../modules/APICalls";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

export const ChrisListAddForm = () => {

  const [chrisItem, setChrisItem] = useState({});
  const history = useHistory();

  const handleInputChange = (event) => {
    const newItemObj = { ...chrisItem };
    newItemObj[event.target.id] = event.target.value;
    setChrisItem(newItemObj);
  }

  const handleAddItem = () => {
    if(!chrisItem.title){
      alert ("Please enter a title")
    }else {
    const newItemObj = { ...chrisItem };
    newItemObj.uid = firebase.auth().currentUser.uid;
    newItemObj.timestamp = Date.now();
    newItemObj.gotIt = false;
    addItem(newItemObj)
      .then(response => history.push("/"))
    }
  }


  return (
    <>
    <Container fluid="xl">
    <Row>
      <Col className="m-2" md={6}>
        <h4>Another One</h4>
        <Form onChange={handleInputChange}>
          <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Official Red Ryder carbine-action 200-shot range model air rifle"/>
          <Form.Text className="text-muted">
            For best results, be specific
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="details">
          <Form.Label>Details</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="I saw one at Macy's and I promise not to shoot my eye out."/>
        </Form.Group>

          <Button onClick={handleAddItem}>Add To List</Button>
        </Form>
      </Col>
      </Row>
      </Container>
    </>
  )
}