<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBeE6F5ORLmds3T96wRragqvwQq1-sk4u4",
    authDomain: "techlawclub-93ed6.firebaseapp.com",
    projectId: "techlawclub-93ed6",
    storageBucket: "techlawclub-93ed6.firebasestorage.app",
    messagingSenderId: "309868998174",
    appId: "1:309868998174:web:8cab8a65209c56598e480f",
    measurementId: "G-6G0DG1WTFP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>