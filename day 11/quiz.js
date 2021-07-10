for(let i=0;i<20;i++){

var button = document.getElementsByTagName("button")[i];


button[i].setAttribute('id', i);
let idOfbuttons = document.getElementbyId(i);
idOfbuttons.addEventListener('click', function() {

  button['correct'].classList.add('rightanswer');
  button['wrong'].classList.add('wronganswer');
})
}


//button.addEventListener('click', function() {
//  console.log("I was clicked");
//  if (button.dataset.type == "correct"){
  //  button.classList.add('rightanswer');
//  }
//  else {
//    button.classList.add('wronganswer');
//  }
//})
//}
