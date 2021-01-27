import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { addItem } from "./../../modules/APICalls";
import { Form, Button } from "react-bootstrap";

export const ChrisListAddForm = () => {

  const [chrisItem, setChrisItem] = useState({});
  const history = useHistory();

  const handleInputChange = (event) => {
    const newItemObj = { ...chrisItem };
    newItemObj[event.target.id] = event.target.value;
    setChrisItem(newItemObj);
  }

  const handleAddItem = () => {
    const newItemObj = { ...chrisItem };
    newItemObj.uid = firebase.auth().currentUser.uid;
    newItemObj.timestamp = Date.now();
    newItemObj.gotIt = false;
    addItem(newItemObj)
      .then(response => history.push("/"))
  }


  return (
    <>
      <h4>Another One</h4>
      <Form onChange={handleInputChange}>
        <Form.Group controlId="title" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="A lego truck with a real horn" />
        <Form.Text className="text-muted">
          For best results, be specific
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="details">
        <Form.Label>Details</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

        <Button onClick={handleAddItem}>Add To List</Button>
      </Form>

    </>
  )
}