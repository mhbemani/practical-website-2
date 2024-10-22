// import mysql from 'mysql2'; ///  this library wont work on webside( or on the browser side)
// import dotenv from 'dotenv';
// dotenv.config();
// async function fetchData(){
//     const pool = mysql.createPool({
//         host: process.env.MYSQL_HOST,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASSWORD,
//         database: process.env.MYSQL_DATABASE
//     }).promise();
//    
//     async function getCustomers() {
//         // pool.query("INSERT INTO customers VALUES (?,?,?,?)",[4,"user4","04040404","esf-12-1991"])
//         const [rows] = await pool.query("SELECT * FROM customers")
//         return rows
//     }
//    
//     const custs = await getCustomers();
//     console.log(custs);
//
// }    
// import 'xhr2';
// function getData(){
//     global.XMLHttpRequest = require('xhr2');
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function(){
//         console.log(this.responseText)
//     }
//     xhttp.open("GET", "google.com"); //  customers.ibd
//     xhttp.send();
// }
// getData();
function submit_login(){
    document.getElementById("login-submit").innerHTML = "login";
    document.getElementById("login-option-identifier").style.transform = "translateX(0dvh)";
    document.getElementById("login-textfield").style.display = "flex";
    document.getElementById("signup-textfield").style.display = "none";
    document.getElementById("login-signup").style.height = "54dvh";
    document.getElementById("loginsignup-textfield").style.height = "24dvh";
    document.getElementById("login-option-identifier").style.transitionDuration = "0.5s";
}
function submit_signup(){
    document.getElementById("login-submit").innerHTML = "sing up";
    document.getElementById("login-option-identifier").style.transform = "translateX(24dvh)";
    document.getElementById("login-textfield").style.display = "none";
    document.getElementById("signup-textfield").style.display = "flex";
    document.getElementById("login-signup").style.height = "64dvh";
    document.getElementById("loginsignup-textfield").style.height = "34dvh";
    document.getElementById("login-option-identifier").style.transitionDuration = "0.5s";
    document.getElementById("login-signup").style.transitionDuration = "0.2s";
    document.getElementById("loginsignup-textfield").style.transitionDuration = "0.2s";
}
