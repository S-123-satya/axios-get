// const axios = require('axios');
{/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */}

function saveAppointment() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Create an appointment object
    var obj = {
    name: name,
    email: email,
    phone: phone
    };
    return obj;
}

            // // Check if local storage is supported by the browser
            // if (typeof(Storage) !== "undefined") {
            // // Retrieve existing appointments from local storage
            // var existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

            // // Add the new appointment
            // existingAppointments.push(appointment);

            // // Save the updated appointments back to local storage
            // localStorage.setItem("appointments", JSON.stringify(existingAppointments));

            // // Clear the form fields
            // document.getElementById("name").value = "";
            // document.getElementById("email").value = "";
            // document.getElementById("phone").value = "";

            // alert("Appointment saved successfully!");
            // } else {
            // alert("Sorry, your browser doesn't support local storage. Please upgrade to a modern browser.");
            // }
    const get2=document.getElementById('get');
    // console.log(get2);
    const post2=document.getElementById('post');
    
    function post1(){
        // console.log('hi');
        const obj =saveAppointment();
        axios.post("https://crudcrud.com/api/8b1db6d5262d4f4a9f186d34ec42474b/Appointment",obj)
        .then(resolve=>console.log(resolve))
        .catch(err=>{
            console.log(err);
        })
    }
    function get1(){
        axios.get("https://crudcrud.com/api/8b1db6d5262d4f4a9f186d34ec42474b/Appointment")
        .then(resolve=>{
            console.log("results are: s");
            console.log(resolve)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    get2.addEventListener('click',get1);
    post2.addEventListener('click',post1);

