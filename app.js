


function CreatePost() {
    var input = document.getElementById("inputtext");
    var mainHeading = document.getElementById("mainHeading");
    
    mainHeading.innerHTML = input.value;
    input.value = ""; 
}

var mainContent = document.getElementById("mainContent");
var heading = mainContent.getElementsByTagName("h1");
console.log(heading[0].innerHTML); 


