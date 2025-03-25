// get the entries 
var request = await fetch ('assets/notes.json');
var notes = await request.json();

console.log(notes);

// get the input elements 
var occasionSelect = document.querySelector('select[name="occasion"]');
var toSelect = document.querySelector('select[name="to"]');
var dateSelect = document.querySelector('.date')

console.log(occasionSelect, toSelect, dateSelect);

// get the submit button
var captureButton = document.querySelector('button[name="capture"]');

console.log(captureButton);

// get the output element 
var output = document.querySelector('.output');

console.log(output);

// add event listener to the button
captureButton.addEventListener('click', () => {

    // get the active settings 
    var occasion = occasionSelect.value;
    var to = toSelect.value;
    var storyDate = document.querySelector('input[name="storydate"]').value;

    console.log(occasion, to, storyDate);

    // get the matching entry
    var matchingEntry = notes.find((entry) => {
        return entry.occasion == occasion 
            && entry.to == to;
    });

    console.log(matchingEntry);

    if (matchingEntry) {
        document.body.style.backgroundColor = 'black';
        output.innerHTML = `<div class="border-image"> 
        <img src= "${ matchingEntry.filename }">
        <div class="date-display">${storyDate}</div> 
        <div class="note">${ matchingEntry.note }</div>
        </div>`;
    } else {
        output.innerHTML = `<div class="message"> Nothing Found :( </div>`;
    }

})