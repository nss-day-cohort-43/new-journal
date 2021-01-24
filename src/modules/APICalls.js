import firebase from "firebase/app";
const dataURL = "https://christmasjournal-d3efa.firebaseio.com";

export const getAll = () => {
	//in the rules section of your Firebase Database, be sure to include 'indexOn` for the properties you will need for selection
	// for example: only return items with a specific uid
	/* 
		"christList": {
			".indexOn": ["uid"]
		}
	*/
	
	// https://firebase.google.com/docs/database/rest/retrieve-data?authuser=0
	// combine orderBy with any of the other five parameters: limitToFirst, limitToLast, startAt, endAt, and equalTo
	return fetch(`${dataURL}/christList.json/?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`,{
		"access_token": firebase.auth().currentUser.getAccessToken()
	})
	.then(response => response.json())
	
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

	//we don't want to add the firebase key to the item object on firebase(duplication of data) so, 
	//make a new object without the fbid
	const updatedObj = {
		"title": listObj.title
	}
	return fetch(`${dataURL}/christList/${listObj.fbid}.json`,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(updatedObj)
	})
	
}

/*
const dataURL = "https://christmasjournal-d3efa.firebaseio.com";
  console.log("token", firebase.auth().currentUser.getIdToken(true).then(token => token))
  const testItem = () => {
    const itemObj = {
      title:"Yeah2",
      uid: firebase.auth().currentUser.uid
    }
    return fetch(`${dataURL}/christList.json`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "auth": firebase.auth().currentUser.getIdToken(true)
      },
      body: JSON.stringify(itemObj)
    })
  }
  */