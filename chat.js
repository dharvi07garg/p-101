// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQaOX97du5ftNo1xmR53oM1WCRbiUS2MI",
    authDomain: "lets-chat-app-74e2f.firebaseapp.com",
    databaseURL: "https://lets-chat-app-74e2f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-74e2f",
    storageBucket: "lets-chat-app-74e2f.appspot.com",
    messagingSenderId: "129227656314",
    appId: "1:129227656314:web:b208585458cdf04bf8bfc3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



