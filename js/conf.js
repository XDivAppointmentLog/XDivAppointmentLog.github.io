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
else if ( username == "VoT" && password == "9129"){
  alert("login successful")
  location.replace("appointment.html")
}
// to here

// then paste it below this line
else if ( username == "LingerfeltT" && password == "4371"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "BoudreauxS" && password == "6384"){
  alert("login successful")
  location.replace("appointment.html")
}  
else if ( username == "BrownJ" && password == "2540"){
  alert("login successful")
  location.replace("appointment.html")
}  
else if ( username == "BerryA" && password == "6660"){
  alert("login successful")
  location.replace("appointment.html")
}  
else if ( username == "BrowneS" && password == "9379"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "HodgesA" && password == "1530"){
  alert("login successful")
  location.replace("appointment.html")
}  
else if ( username == "EscalanteI" && password == "6539"){
  alert("login successful")
  location.replace("appointment.html")
}  
else if ( username == "KarnsJ" && password == "8474"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "KellyC" && password == "4115"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "PondsJ" && password == "3740"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "ReyesperezG" && password == "7352"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "SoklovicG" && password == "1235"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "StarzykJ" && password == "7654"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "DillardL" && password == "9853"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "MasseyA" && password == "1631"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "SmithJ" && password == "8966"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "WalkerK" && password == "0803"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "BauersJ" && password == "8753"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "BurkeyT" && password == "1069"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "ByrdJ" && password == "2148"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "FentonR" && password == "5870"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "HouseA" && password == "1357"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "PearsonK" && password == "6265"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "PittsJ" && password == "9682"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "JohnsonD" && password == "4088"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "TaylorC" && password == "2081"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "ToledoM" && password == "4836"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "ZellersK" && password == "8846"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "EhlersD" && password == "0420"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "HowardK" && password == "7219"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "ThomasJ" && password == "7057"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "RandT" && password == "1850"){
  alert("login successful")
  location.replace("appointment.html")
}
else if ( username == "WeisbeckerM" && password == "5974"){
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
