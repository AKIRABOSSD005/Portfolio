//sdk for firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpGvpKdoDraeGXtE_pvfvv0W_iD1At-TQ",
    authDomain: "portfolio-3a566.firebaseapp.com",
    projectId: "portfolio-3a566",
    storageBucket: "portfolio-3a566.appspot.com", // <-- correct!
    messagingSenderId: "501875707207",
    appId: "1:501875707207:web:5ceeb81e00119009a49062",
    measurementId: "G-0HM297C4Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

// Function for reloading the page
function reloadPage() {
    window.location.reload();
}