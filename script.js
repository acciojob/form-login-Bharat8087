function getFormvalue() {
    //Write your code here

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if (firstName !== "" && lastName !== "") {
        var fullName = firstName + " " + lastName;
        alert("First and Last Name: " + fullName);
    } else {
        alert("Please fill in both First Name and Last Name fields.");
    }
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    getFormvalue();
});

}
