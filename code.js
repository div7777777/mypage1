// const myOne = document.querySelector(".one");
// const myTwo = document.querySelector(".two");
// const myThree = document.querySelector(".three");
// const mySkyblue = document.querySelector(".skyblue");
// const myYellow = document.querySelector(".yellow");
// const myPink = document.querySelector(".rose");
// const myCompte = document.querySelector(".compte");

// myOne.addEventListener("click", ()=>{
// myCompte.style.transform = "translateX(350px)";
// myCompte.style.transition = "0.9s";
// });
// myTwo.addEventListener("click", ()=>{
//     myCompte.style.transform = "translateX(0)";
//     myCompte.style.transition = "0.9s";
// });
// myThree.addEventListener("click",()=>{
//     myCompte.style.transform = "translateX(-350px)";
//     myCompte.style.transition = "0.9s";
// });

// mon code js
const myGreen = document.getElementById("green");
const myRed = document.getElementById("red");
const myBlue = document.getElementById("blue");

myGreen.addEventListener("click",()=>{
myGreen.style.transform = "scale(1.2, 1.2)";
myGreen.style.boxShadow = "inset 1px 1px 2em white, 1px 1px 2em black";
myRed.style.transform = "scale(1, 1)";
myRed.style.boxShadow = "None";
myBlue.style.transform = "scale(1, 1)";
myBlue.style.boxShadow = "None";
window.scroll({
    top:1800,
    behavior:'smooth'
})
});

myRed.addEventListener("click",()=>{
myRed.style.transform = "scale(1.2, 1.2)";
myRed.style.boxShadow = "inset 1px 1px 2em white, 1px 1px 2em black";
myGreen.style.transform = "scale(1, 1)";
myGreen.style.boxShadow = "none";
myBlue.style.transform = "scale(1, 1)";
myBlue.style.boxShadow = "None";
    window.scroll({
        top:0,
        behavior:'smooth'
    })
});
    
myBlue.addEventListener("click",()=>{
myBlue.style.transform = "scale(1.2, 1.2)";
myBlue.style.boxShadow = "inset 1px 1px 2em white, 1px 1px 2em black";
myGreen.style.transform = "scale(1, 1)";
myGreen.style.boxShadow = "none";
myRed.style.transform = "scale(1, 1)";
myRed.style.boxShadow = "None";
window.scroll({
        top:900,
        behavior:'smooth'
    })
});


