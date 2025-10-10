console.log("Welcome to Gika Portfolio!");

greetUser();

function greetUser() {
    let userName = prompt("Please enter your name:");
    document.getElementById("welcome speech").innerText = userName;
}

function validateForm() {
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-input").value;

    console.log(name, email, message);
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else {
        alert("Thank you for your message, " + name + "!");
    }
}