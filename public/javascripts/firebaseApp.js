(function(){

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCzspEkMVoIgKsu3w5t6Efqt907OvfbhWM",
        authDomain: "libapp-15fd1.firebaseapp.com",
        databaseURL: "https://libapp-15fd1.firebaseio.com",
        storageBucket: "libapp-15fd1.appspot.com",
        messagingSenderId: "83804972934"
    };


    firebase.initializeApp(config);


    //For My Library App project
    const username = document.getElementById("Username");
    const pass = document.getElementById("Password");
    const btn = document.getElementById("btn");

    // Add login event
    btn.addEventListener('click', e => {
        const email = username.value;
        const password = pass.value;
        const auth = firebase.auth();

    })

})();