function getFormvalue() {
    //Write your code here

    
    var firstName = document.getElementsByName("fname")[0].value;
    var lastName = document.getElementsByName("lname")[0].value;

    if (firstName !== "" && lastName !== "") {
        var fullName = firstName + " " + lastName;
        alert("First and Last Name: " + fullName);
    } else {
        alert("Please fill in both First Name and Last Name fields.");
    }
}
