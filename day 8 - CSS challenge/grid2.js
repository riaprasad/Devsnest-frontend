var noOfButtons = document.getElementsByClassName("items");



for (let i = 0; i < noOfButtons.length; i++)
{
    noOfButtons[i].setAttribute('id', i);
    let idOfButtons  = document.getElementById(i);
    idOfButtons.addEventListener("click", () => {
    idOfButtons.classList.toggle("itemsclicked");
    });
}


// for(let i=0;i<20;i++){
//
// var button = document.getElementsByClassName('answer')[i];
// console.log(button);
//
// button.setAttribute('id', i);
// let idOfbuttons = document.getElementById(`${i}`);
// idOfbuttons.addEventListener('click', function() {
//
//
// })
// }
