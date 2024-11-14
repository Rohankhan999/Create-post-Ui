// function CreatePost(){
//     var input = document.getElementById("inputtext");
//     var main = document.getElementsByClassName("main")
     
//     main.innerHTML = input.value;
//     input.value = ""
// }

// var main = document.getElementsByTagName("h1");
// console.log(main[0]);
// var main = document.getElementById("main")
// var heading = main.getElementsByTagName("h1")
// console.log(heading[0].innerHTML);


function CreatePost() {
    var input = document.getElementById("inputtext");
    var mainHeading = document.getElementById("mainHeading");
    
    mainHeading.innerHTML = input.value;
    input.value = ""; 
}

var mainContent = document.getElementById("mainContent");
var heading = mainContent.getElementsByTagName("h1");
console.log(heading[0].innerHTML); 


