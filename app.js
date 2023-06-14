// const axios = require('axios');
{/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */}
const url='https://crudcrud.com/api/2414481a2f934ac79d89f5a077947459/Appointment';
window.addEventListener('DOMContentLoaded',()=>{
    axios.get(url)
    .then(resolve=>{
        const print=document.getElementById('print');
        for(let i=0;i<resolve.data.length;i++){
            print.innerHTML+=`
                <br><br>
                <div class="container">
                    <div class="row-12">
                        <label for="name">Name:</label>
                        <label for="name">${resolve.data[i].name}</label>
                        <label for="email">Email:</label>
                        <label for="email">${resolve.data[i].email}</label>
                        <label for="phone">Phone:</label>
                        <label for="phone">${resolve.data[i].phone}</label>
                    </div>
                </div>
            `;
            var button = document.createElement("button");
            button.innerHTML = "Click Me";
            button.id=`button${i}`;
            // Add a click event listener to the button
            button.addEventListener("click", function() {
            console.log("Button clicked!");
            });
            print.appendChild(button);
            console.log(button);
        }
    })
    .catch((err)=>{
            const print=document.getElementById('print');
            print.innerHTML=`<h3>${err}</>`;
        })
    });
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
    axios.post(url,obj)
    .then(resolve)
    .catch((err)=>{
        const print=document.getElementById('print');
        print.innerHTML=`<h3>${err}</>`;
    })
}
function get1(){
    axios.get(url)
    .then(resolve=>{
        // console.log("results are: s");
        // console.log(resolve.data)
        const print=document.getElementById('print');
        print.innerHTML='';
        for(let i=0;i<resolve.data.length;i++){
            print.innerHTML+=`
                <br><br>
                <div class="container">
                    <div class="row-12">
                        <label for="name">Name:</label>
                        <label for="name">${resolve.data[i].name}</label>
                        <label for="email">Email:</label>
                        <label for="email">${resolve.data[i].email}</label>
                        <label for="phone">Phone:</label>
                        <label for="phone">${resolve.data[i].phone}</label>
                        <button type="button" class="btn btn-success">Update</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            `;
            var button = document.createElement("button");
            button.innerHTML = "Click Me";
            button.id=`button${i}`;
            // Add a click event listener to the button
            button.addEventListener("click", function() {
            alert("Button clicked!");
            });
            print.appendChild(button);
        }
    })
    .catch((err)=>{
        const print=document.getElementById('print');
        print.innerHTML=`<h3>${err}</>`;
    })
}
get2.addEventListener('click',get1);
post2.addEventListener('click',post1);

const button1=document.getElementById('button1');
// button.addEventListener('click',()=>{
//     console.log('hii');
// });
// console.clear();
console.log(button1);