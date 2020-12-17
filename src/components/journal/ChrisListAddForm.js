import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { addItem } from "./../../modules/APICalls";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

export const ChrisListAddForm = () => {

  const [chrisItem, setChrisItem] = useState({});
  const history = useHistory();

  console.log("current user uid", firebase.auth().currentUser.uid);

  const updateChrisItem = (event) => {
    const newItem = { ...chrisItem };
    newItem[event.target.id] = event.target.value;
    setChrisItem(newItem);
  }

  const handleAddItem = (event) => {
    const itemObj = { ...chrisItem };
    itemObj.uid = firebase.auth().currentUser.uid;
    itemObj.timestamp = Date.now()
    addItem(chrisItem)
      .then(response => history.push("/"))
  }





  return (
    <>
      <h4>Add To My Christmas List</h4>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Name of item" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>With textarea</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        <Button onClick={handleAddItem}>Add To List</Button>
      </Form>

    </>
  )
}