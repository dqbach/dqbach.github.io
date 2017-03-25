


function logInOnload() {
	var outer = document.getElementById('outer');
	var signIn = document.getElementById('sign-in-form');
	var recover = document.getElementById('recover-form');
	var signUp = document.getElementById('sign-up-form');

	var xBtn = document.querySelectorAll('#x');
	var logInBtn = document.getElementById('login');
	var dayBtn = document.getElementById('clickHere');
	var taoTaiKhoanBtn = document.getElementById('createAccount');

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == outer) {
			signIn.style.display = "none";
			recover.style.display = "none";
			signUp.style.display = "none";
		}
		for (var i = 0; i < xBtn.length; i++) {
			
			if (event.target == xBtn[i]) {
				signIn.style.display = "none";
				recover.style.display = "none";
				signUp.style.display = "none";
			}
		}
		

		if (event.target == logInBtn) {
			signIn.style.display = "block";
			recover.style.display = "none";
			signUp.style.display = "none";
		}

		if (event.target == dayBtn) {
			signIn.style.display = "none";
			recover.style.display = "block";
			signUp.style.display = "none";
		}

		if (event.target == taoTaiKhoanBtn) {
			signIn.style.display = "none";
			recover.style.display = "none";
			signUp.style.display = "block";
		}
	};
}

window.onload = function () {
	logInOnload();
};
