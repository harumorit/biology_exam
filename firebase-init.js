// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZ9xXjz9mxQhyHJSvCAv1U5Yqvd_GEU9M",
  authDomain: "bio2-quiz.firebaseapp.com",
  projectId: "bio2-quiz",
  storageBucket: "bio2-quiz.appspot.com",
  messagingSenderId: "918787492585",
  appId: "1:918787492585:web:54d6f6024dc006cb0bfe78"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
