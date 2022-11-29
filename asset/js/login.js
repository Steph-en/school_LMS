var objPeople =
[
    {
        username: "ENG19A00007Y",
        password: "AitGH123"
    },
    {
        username: "ENG19A00017Y",
        password: "AitGH123"
    },
    {
        username: "ADS19A00106Y",
        password: "AitGH123"
    },
    {
        username: "ADS19A00017Y",
        password: "AitGH123"
    }
]

function getInfo()
{
    var username = document.getElementById("floatingInput").value
    var password = document.getElementById("floatingPassword").value
    var button = document.querySelector(".btn")
    // console.log("UserID: " + username + " and Password: " + password)
    var i;

    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            alert(username + " is valid!!!")
            return
        } 
    }
    console.log("Incorrect username or password")
};

// Firebase
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDkMNH30esem4etAjEnbBbOJp4S3-V5DXs",
//     authDomain: "school-system-baa4d.firebaseapp.com",
//     projectId: "school-system-baa4d",
//     storageBucket: "school-system-baa4d.appspot.com",
//     messagingSenderId: "1043186853877",
//     appId: "1:1043186853877:web:bc1aa342e36e8b7d5c62bc",
//     measurementId: "G-0R5P8SQW54"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = firebase.auth();