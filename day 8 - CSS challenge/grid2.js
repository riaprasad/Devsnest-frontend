var noOfButtons = document.getElementsByClassName("items");



for (let i = 0; i < noOfButtons.length; i++)
{
    noOfButtons[i].setAttribute('id', i);
    let idOfButtons  = document.getElementById(i);
    idOfButtons.addEventListener("click", () => {
    idOfButtons.classList.toggle("itemsclicked");
    });
}
