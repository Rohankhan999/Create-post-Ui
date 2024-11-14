// function CreatePost() {
//     var input = document.getElementById("inputtext");
//     var mainHeading = document.getElementById("mainHeading");
    
//     mainHeading.innerHTML = input.value;
//     input.value = ""; 
// }

// var mainContent = document.getElementById("mainContent");
// var heading = mainContent.getElementsByTagName("h1");
// console.log(heading[0].innerHTML); 


function CreatePost() {
    var input = document.getElementById("inputtext");
    var postContainer = document.getElementById("postContainer");

    if (input.value.trim() !== "") {
        // Create a new div for the post content
        var newPost = document.createElement("div");
        newPost.className = "singlePost";
        newPost.innerHTML = `<h2>${input.value}</h2>`;

        // Append the new post to the post container
        postContainer.appendChild(newPost);

        // Clear the input field
        input.value = "";
    } else {
        alert("Please enter some text to post.");
    }
}
