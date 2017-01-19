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

  	//Realtime Database 1
  	const bigOne = document.getElementById('BigOne');

  	const dbRef = firebase.database().ref().child('text'); // Create references
    dbRef.on('value', snap => bigOne.innerText = snap.val()); //issue
    

  

    //Realtime Database 2
    const preObject = document.getElementById('object');
    
    const dbRefObject = firebase.database().ref().child('object'); // Create references
    dbRefObject.on('value', snap => { // console.log(snap.val())
    	preObject.innerText = JSON.stringify(snap.val(), null, 3);

    	});


    //Get elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogOut = document.getElementById("btnLogOut");

    // Add login event
    btnLogin.addEventListener('click', e => {
    	// Get email and password
    	const email = txtEmail.value;
    	const password = txtPassword.value;
    	const auth = firebase.auth();

    	// Sign in
    	const promise = auth.signInWithEmailAndPassword(email, password);

    	promise.catch(e => console.log(e.message));
    })

    btnSignUp.addEventListener('click', e => {

    	// Get email and password
    	const email = txtEmail.value;
    	const password = txtPassword.value;
    	const auth = firebase.auth();

    	// Create user
    	const promise = auth.createUserWithEmailAndPassword(email, password);

    	// promise.then(user => console.log(user)).catch(e => console.log(e.message));
    	promise.catch(e => console.log(e.message));
    })

    btnLogout.addEventListener('click', e => {
    	firebase.auth().signOut();
    });


    // Add a real time listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
    		if(firebaseUser){
    			console.log(firebaseUser);
    			btnLogout.classList.remove('hide');
    		} else {
    			console.log('not logged in');
    			btnLogout.classList.add('hide');
    		}
    	})

    // For Storage
    // Get Elements
    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    // Listen For File Selection
    fileButton.addEventListener('change', function(e){
    	// Get file
    	var file = e.target.files[0];

    	// Create a storage ref
    	var storageRef = firebase.storage().ref('LibBooks/' + file.name);

    	// Upload the file
    	var task = storageRef.put(file);

    	// Update progress bar
    	task.on('state_changed', 
    		function progress(snapshot){
    			var percentage = (snapshot.bytesTransferred / 
    			snapshot.totalBytes)*100;
    			uploader.value = percentage;
    			},
    		 function error(err){

    		 },
    		  function complete(){

    		  });

    })


})();