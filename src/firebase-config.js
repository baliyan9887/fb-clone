import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCZgP7a9w0-_QFAKysjmTQiwF6_jbLmuQU",
  authDomain: "fb-clone-gk.firebaseapp.com",
  databaseURL: "https://fb-clone-gk.firebaseio.com",
  projectId: "fb-clone-gk",
  storageBucket: "fb-clone-gk.appspot.com",
  messagingSenderId: "498749108060",
  appId: "1:498749108060:web:3e538e18c52f24d0751b99",
  measurementId: "G-TFDY3ZCGYX"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;