// get the elements 
var pressButton= document.querySelector('button[name="press"]');
var pennySelect= document.querySelector('select[name="penny"]');
var pennyImage= document.querySelector('.penny');

// log the elements
console.log(pressButton);

// add event listener to press button
pressButton.addEventListener('click', () => {
    // log the penny value 
    console.log(pennySelect.value);

    // set the penny image src
    pennyImage.src = 'img/' + pennySelect.value;

    // log the penny image 
    console.log(pennyImage);


});

