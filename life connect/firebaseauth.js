
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
  import{getFirestore,setDoc,doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore..js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBtnOmPS-2KxL12SSY7NrGN5tsW8zKf1GY",
    authDomain: "life-connect-5ba8a.firebaseapp.com",
    projectId: "life-connect-5ba8a",
    storageBucket: "life-connect-5ba8a.firebasestorage.app",
    messagingSenderId: "596137422329",
    appId: "1:596137422329:web:01b81c361f9fcb42b6a128",
    measurementId: "G-3C1KN6935C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await db.collection('users').doc(userCredential.user.uid).set({ name, email, createdAt: new Date() });
    alert("Sign-up successful!");
    showLoginPage();
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    showMainPage();
  } catch (error) {
    alert(error.message);
  }
});