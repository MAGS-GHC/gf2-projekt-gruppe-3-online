//TOGGLE BETWEEN WHITE AND GREEN INPUT FIELD COLOR

let inputs = document.querySelectorAll('.input1, .input2, .input3, .input4, .input5, .input6, .input7, .input8, .input9, .input10, .input11, .input12, .input13, .input14, .input15, .input16, .input17, .input18, .input19, .input20, .input21, .input22, .input23, .input24, .input25, .input26, .input27');

inputs.forEach(function(input) {
input.addEventListener('click', function() {
    this.classList.toggle('clicked');
  });
}); 


// CLEAR GREEN WHEN CREATING NEW CARDS

function clearGreen() {
  let clickedElements = document.querySelectorAll('.clicked');

  clickedElements.forEach(function(element) {
      element.classList.remove('clicked');
  });
}