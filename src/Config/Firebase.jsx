import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getDatabase} from 'firebase/database'





const firebaseConfig = {
  apiKey: "AIzaSyAnZf0MKXcRJp2_szgK5Xv0wJBQac12-vQ",
  authDomain: "olxdata-63c3a.firebaseapp.com",
  projectId: "olxdata-63c3a",
  storageBucket: "olxdata-63c3a.appspot.com",
  messagingSenderId: "235700044454",
  appId: "1:235700044454:web:8c5b97a53d52351057aa67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getDatabase(app)



export {auth,db}