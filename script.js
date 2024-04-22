function getFormvalue() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var fullName = firstName + " " + lastName;
    alert(fullName);
}
