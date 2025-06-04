const button = document.querySelector(".fa-bars");
const magicDisplay = document.querySelector(".nav-container");

button.addEventListener("click", () => {
    magicDisplay.classList.toggle("show")
});

// let ages = [12, 14, 32, 50, 76, 31, 17, 19, 35, 44, 45, 49, 51, 55, 60]

// let canVote = []

// for(let i = 0; i < ages.length; i++){
//   if (ages[i] >= 18){
//       canVote.push(ages[i])
//   }
//   console.log(canVote)

//   }


// console.log(ages)

const close = document.querySelector(".fa-xmark");


close.addEventListener("click", () => {
    magicDisplay.classList.add("show")
});


