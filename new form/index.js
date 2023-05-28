var form = document.getElementById("myForm");
var successMessage = document.getElementById("successMessage");
var unsuccessMessage=document.getElementById("unsuccessMessage");

unsuccessMessage.style.display = "none";
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
        successMessage.style.display = "block";
        form.reset();
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 10000);
        
    } else {
        unsuccessMessage.style.display = "block";
        setTimeout(function() {
            unsuccessMessage.style.display = "none";
        }, 5000);
    }
});



function validateForm() {
    var username = document.getElementById("username").value;
    var role = document.getElementById("role").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var success = true;

    if (username == "") {
        printError("nameErr", "Please enter your name");
        document.getElementById("nameErr").classList.add("error");
        success = false;
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(username) === false) {
            printError("nameErr", "Please enter a valid name");
            document.getElementById("nameErr").classList.add("error");
            success = false;
        } else {
            printError("nameErr", "");
        }
    }

    // Validate Email
    if (email == "") {
        printError("emailErr", "Please enter your email address");
        document.getElementById("emailErr").classList.add("error");
        success = false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            document.getElementById("emailErr").classList.add("error");
            success = false;
        } else {
            printError("emailErr", "");
        }
    }

    // Validate mobile number
    if (phoneNumber == "") {
        printError("phoneErr", "Please enter your mobile number");
        document.getElementById("phoneErr").classList.add("error");
        success = false;
    } else {
        var regex = /^[0-9]\d{9}$/;
        if (regex.test(phoneNumber) === false) {
            printError("phoneErr", "Please enter a valid 10 digit mobile number");
            document.getElementById("phoneErr").classList.add("error");
            success = false;
        } else {
            printError("phoneErr", "");
        }
    }

    // Validate role
    if (role == "") {
        printError("roleErr", "Please select your country");
        document.getElementById("roleErr").classList.add("error");
        success = false;
    } else {
        printError("roleErr", "");
    }

    // Validate country
    if (country == "") {
        printError("countryErr", "Please select your country");
        document.getElementById("countryErr").classList.add("error");
        success = false;
    } else {
        printError("countryErr", "");
    }

    // Validate city
    if (city == "") {
        printError("cityErr", "Please enter your city");
        document.getElementById("cityErr").classList.add("error");
        success = false;
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(city) === false) {
            printError("cityErr", "Please enter a valid city name");
            document.getElementById("cityErr").classList.add("error");
            success = false;
        } else {
            printError("cityErr", "");
        }
    }

    // Validate state
    if (state == "") {
        printError("stateErr", "Please enter your state");
        document.getElementById("stateErr").classList.add("error");
        success = false;
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(state) === false) {
            printError("stateErr", "Please enter a valid state name");
            document.getElementById("stateErr").classList.add("error");
            success = false;
        } else {
            printError("stateErr", "");
        }
    }

    return success;
}

function printError(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
}

