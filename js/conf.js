var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "asian123"){
  alert("login successful")
  location.replace("appointment.html")
}
  
  // copy from here
else if ( username == "admin1" && password == "asian1234"){
  alert("login successful")
  location.replace("appointment.html")
}
// to here

// then paste it below this line
else if ( username == "LingerfeltT" && password == "1234"){
  alert("login successful")
  location.replace("appointment.html")
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
