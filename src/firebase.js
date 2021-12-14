import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY32OElDC40xa2LX0brUH6ec1AmNSCg_g",
  authDomain: "linkedin-clone-b958d.firebaseapp.com",
  projectId: "linkedin-clone-b958d",
  storageBucket: "linkedin-clone-b958d.appspot.com",
  messagingSenderId: "936919772732",
  appId: "1:936919772732:web:f94463e9cc105e9fa85d39",
  measurementId: "G-DQ9KT9SC5N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
