# A New Journal Dawns As A Christmas List

This project utilizes React, Firebase Authentication, and usage of FirebaseDB as an API with fetch calls.

## Firebase Setup
1. Create new real-time database.
1. Set the rules to true
1. For your project: `npm install firebase`
1. Copy the config object and replace in `components/fbAuth/firebaseConfig.js`

```
export const firebaseConfig = {
    apiKey: "REALLY-LONG-VALUE",
    authDomain: "YOUR-DATABASE.firebaseapp.com",
    databaseURL: "https://YOUR-DATABASE.firebaseio.com",
    projectId: "YOUR-DATABASE",
    storageBucket: "YOUR-DATABASE.appspot.com",
    messagingSenderId: "REALLY-LONG-NUMBER",
    appId: "YOUR-APPID"
  }
  ```

## Initialize Your App
1. Within your main app component, initialize Firebase with your configuration.

```
import { firebaseConfig } from "./components/fbAuth/firebaseConfig";
import firebase from "firebase/app";

firebase.initializeApp(firebaseConfig);
```


## Firebase Authentication
Once our app is initialized, firebase methods can be used to authenticate users and maintain the state of the logged in user.

1. Create a `FirebaseProvider` component with `useState()` for `isLoggedIn`
1. `useEffect` confirms the app is ready
1. Each login and logout method updates the state of `isLoggedIn`
1. Firebase provides methods for logging in with various providers including Google as well as email/password.
1. Wrap the app with `FirebaseProvider`

> App.js
```
 <Router>
	<FirebaseProvider>
		<Header />
		<ApplicationViews />
	</FirebaseProvider>
</Router>
```
## Check for a user and display views
`ApplicationViews` imports the `isLoggedIn` state from the `FirebaseProvider`. This can be evaluated and display content.

> ApplicationViews.js
```
<Route path="/home">
	{isLoggedIn ? <ChrisList /> : <Redirect to="/login" />}
</Route>
```

## Access database with fetch calls
Similar to json-server, make fetch calls to Firebase.

> modules/APICalls.js
```
return fetch(`${dataURL}/christList.json/?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
.then(response => response.json())
```

* Combine `orderBy` with any of the other five parameters: `limitToFirst, limitToLast, startAt, endAt, and equalTo`

## Firebase Data and Key

Firebase returns an object. Before we can `map` over the data, it needs to be converted to an array. Simultaneously, we can add the Firebase key as a property on each object.

> components/journal/ChrisList.js

```
let arrayWithFBID = Object.keys(data).map((key, index) => {
	data[key].fbid = key;
	return data[key];
});
	
```

