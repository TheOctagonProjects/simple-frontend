
console.log("JavaScript running in the frontend");
console.log("Let's bring a user now");

// This code is transported to the frontend and makes this requests from the frontend

// Sends an HTTP request to the endpoint created in the backend
// To our api

// Everything is in our computer, but in the future this code will travel to the user's browser

// And it will send the request through the world, to our server, where the backend will be waiting
// And listening

// So if our website is houses.com, this request will be
// fetch("http://houses.com:3000/api/users/1")
// So it talks with our backend and doesn't go somewhere random

fetch("http://localhost:3000/api/users/1")
    .then(data => data.json())
    .then((info) => {
        console.log("The info arrived and it's");
        console.log(info);
    });



// when someone clicks on a button, do this

// When they click on another button, do that