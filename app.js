
function CreatePost() {
    var input = document.getElementById("inputtext");
    var postContainer = document.getElementById("postContainer");

    if (input.value.trim() !== "") {
        var newPost = document.createElement("div");
        newPost.className = "singlePost";
        newPost.innerHTML = `<h2>${input.value}</h2>`;

        postContainer.appendChild(newPost);
        input.value = "";
    } else {
        alert("Please enter some text to post.");
    }
}
