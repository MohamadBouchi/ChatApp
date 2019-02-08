
// Initialize Firebase
var config = {
    apiKey: `${process.env.APIKEY}`,
    authDomain: "vue-chat-9cf02.firebaseapp.com",
    databaseURL: "https://vue-chat-9cf02.firebaseio.com",
    projectId: "vue-chat-9cf02",
    storageBucket: "",
    messagingSenderId: "1014440179998"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();