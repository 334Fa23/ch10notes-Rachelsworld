/*
Studen Name: Rachel Wait
File Name: script.js
Date: September 14, 2023
*/

//Global Variables
var video = document.getElementById("example");
var videosource = document.getElementById("vid-src");
var descriptionsource = document.getElementById("despsrc");

//Hamburger menu funtion
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
} else {
    menu.style.display = "block";
    logo.style.display = "none";
}
}
//Funtion to display the burpees example video
    function burpees() {
        videosource.src = "media/burpees.mp4";
        descriptionsource.src = "media/burpees-descriptions.vtt";
        video.style.display = "block";
        video.load();
    }
    
    
    //funtion to display the plank example video
    function plank() {
        videosource.src = "media/plank.mp4";
        descriptionsource.src = "media/plank-descriptions.vtt";
        video.style.display = "block";
        video.load();
    }
    
    //Function to display the mountain climber example video
    function mountain(){
        videosource.src = "media/mc.mp4";
        descriptionsource.src = "media/mountain-description.vtt";
        video.style.display = "block";
        video.load ();
    }
    
    //Funtion to display a promo code
    funtion discount () {
        var promo = document.getElementById("special");
        promo.firstChild.nodeValue = "Promo Code: D25START";
        promo.style.color = "#ff0000";
        promo.style.fontSize = "2em";
    }