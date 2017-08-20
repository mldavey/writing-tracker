myApp.controller('LoginController', function($scope, $location) {

	var user = firebase.auth().currentUser;

	if (user) {
	  // User is signed in.
	  $location.path('/add');
	}

	$scope.googleLogin = function() {
		//Authenticate to Firebase
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider); //sign in with re-direct page

		firebase.auth().getRedirectResult().then(function(result) {
		  if (result.credential) {
		    // This gives you a Google Access Token. You can use it to access the Google API.
		    var token = result.credential.accessToken;
		  }
		  // The signed-in user info.
		  var user = result.user;

		  //Redirect to add page
		  $location.path('/add');

		})
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		});
	}
});