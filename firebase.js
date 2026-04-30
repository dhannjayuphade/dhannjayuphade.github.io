import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey:"AIzaSyDz443NrLvqfceSGMzNPThMS3vuJ2z0vPY",
  authDomain:"dhannjay-website.firebaseapp.com",
  databaseURL:"https://dhannjay-website-default-rtdb.firebaseio.com",
  projectId:"dhannjay-website"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
