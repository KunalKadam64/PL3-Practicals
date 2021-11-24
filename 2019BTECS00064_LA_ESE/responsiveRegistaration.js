function SaveLibraryDetails() {
    validateControls();
}
function validateControls() {
    //FirstName
    var fname = document.getElementById("fname")
    if (fname.value == "") {
        window.alert("Please enter your full name");
        fname.focus();
        return false;
    }
    //Email
    var email = document.getElementById("email")
    if (email.value == "") {
        window.alert("Please enter your valid email Id");
        email.focus();
        return false;
    }
    //Mobile
    var mobile = document.getElementById("mobile")
    if (mobile.value == "") {
        window.alert("Please enter your 10 digits mobile no.");
        mobile.focus();
        return false;
    }
    //Address
    var address = document.getElementById("address")
    if (address.value == "") {
        window.alert("Please enter your address details");
        address.focus();
        return false;
    }
    // Password
    var password = document.getElementById("password")
    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }

    getControlValues();

}