document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can perform additional validation here if needed

    // Display a simple alert with the submitted data
    /*alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);*/
      alert("We got your information! MWHAHAHA")

});
