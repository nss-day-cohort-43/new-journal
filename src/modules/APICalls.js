import firebase from "firebase/app";
const dataURL = "https://christmasjournal-d3efa.firebaseio.com";

export const getAll = () => {
	
	console.log("auth", firebase.auth())
	return fetch(`${dataURL}/christList.json`)
	.then(response => response.json())
}

const testItem = {
	"title": "this is another test function",
	"fbid": "-MNiY3kW3_nn_Jpn8HR8"
}

export const addItem = (itemObj) => {
	return fetch(`${dataURL}/christList.json`,{
		method:"POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(itemObj)
	})
}

export const updateChristList = (listObj) => {

	//remove fbid from listObj
	const updatedObj = {
		"title": listObj.title
	}
	return fetch(`${dataURL}/christList/${listObj.fbid}.json`,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(listObj)
	})
	
}

// updateChristList(testItem);