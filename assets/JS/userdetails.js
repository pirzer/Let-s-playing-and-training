/*jshint esversion: 6 */  
let Name = sessionStorage.getItem("name");

if (Name)  
{
document.querySelector(".name").innerHTML = Name;
}


