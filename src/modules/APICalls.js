const dataURL = "https://christmasjournal-d3efa.firebaseio.com"

export const getAll = () => {
	return fetch(`${dataURL}/christList.json`)
	.then(response => response.json())
}

const testItem = {
	"title": "this is another test function",
	"fbid": "-MNiY3kW3_nn_Jpn8HR8"
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

updateChristList(testItem);