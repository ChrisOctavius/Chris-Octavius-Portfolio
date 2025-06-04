

//initializing like and unlike button
const like = document.querySelectorAll(".fa-thumbs-up");
const unlike = document.querySelectorAll(".fa-thumbs-down");

like.addEventListener("click", () => {
    like.style.color = "beige";
    unlike.style.color = "black";
});

unlike.addEventListener("clicked", () => {
    unlike.style.color = "beige";
    like.style.color = "black";
});


