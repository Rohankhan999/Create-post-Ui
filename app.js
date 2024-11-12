function CreatePost(){
    var input = document.getElementById("inputtext");
    var main = document.getElementsByClassName("Posts")
     
    main.innerHTML = input.value;
    input.value = ""
}
var main = document.getElementsByTagName ("h1")
console.log(main[0]);
var main = document.getElementById("main")
var heading = main.getElementsByTagName("h1")
console.log(heading.innerHTML);


