import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
const firebaseConfig = {
  apiKey: "AIzaSyDAIsRBzBygZPjFBRcb5gqjY1NONdlSyzM",
  authDomain: "jornada-dev-ebac-202303.firebaseapp.com",
  projectId: "jornada-dev-ebac-202303",
  storageBucket: "jornada-dev-ebac-202303.appspot.com",
  messagingSenderId: "591834620751",
  appId: "1:591834620751:web:388cc3eadfa98e130e1b3a"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
