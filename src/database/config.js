import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyDnDr9J7EPzwenibysO0sVOeUNnKmx6mUM",
    authDomain: "photowall-e9b7a.firebaseapp.com",
    databaseURL: "https://photowall-e9b7a-default-rtdb.firebaseio.com",
    projectId: "photowall-e9b7a",
    storageBucket: "photowall-e9b7a.appspot.com",
    messagingSenderId: "338894193369",
    appId: "1:338894193369:web:dd2b1c99cb3d7c220434c8"
}
  
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { database }