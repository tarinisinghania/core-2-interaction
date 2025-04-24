 // Select the button
 let button = document.querySelector('#buttonGreen');
 let isGreen = false;

// Add click event listener to the button
button.addEventListener('click', function() {
    if (!isGreen) {
    document.body.style.backgroundImage = "url(green1.jpeg)"; 
    document.body.style.backgroundAttachement = "fixed"; 
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundColor = "#5B7329";
    button.style.background = "radial-gradient(#6DC1E6, #b8edfa)";
    button.style.boxShadow = "0 0 20px 10px #8be0f5";
    button.style.color = "white";
    tooltip.style.background = "radial-gradient(#5B7329, #d3d7ae)";
    tooltip1.style.background = "radial-gradient(#5B7329, #d3d7ae)";
    tooltip2.style.background = "radial-gradient(#5B7329, #d3d7ae)";
    tooltip.style.boxShadow = "0 0 20px 10px #f0fcae";
    tooltip1.style.boxShadow = "0 0 20px 10px #f0fcae";
    tooltip2.style.boxShadow = "0 0 20px 10px #f0fcae";
    button.textContent = "go blue!";
    } else {
        // Revert to original styles
        document.body.style.backgroundImage = ""; // Reset background image
        document.body.style.backgroundAttachment = ""; // Reset attachment
        document.body.style.backgroundSize = ""; // Reset size
        document.body.style.backgroundColor = ""; // Reset background color
        button.style.background = ""; // Reset button background
        button.style.boxShadow = ""; // Reset button shadow
        button.style.color = ""; // Reset button text color
        
        // Reset tooltip backgrounds
        tooltip.style.background = ""; 
        tooltip1.style.background = ""; 
        tooltip2.style.background = ""; 
        
        // Reset tooltip shadows
        tooltip.style.boxShadow = ""; 
        tooltip1.style.boxShadow = ""; 
        tooltip2.style.boxShadow = ""; 
        
        // Change the button text back
        button.textContent = "go green!";
    }
    isGreen = !isGreen; // Toggle the state
});

const circle = document.getElementById('hoverTarget');
const circle1 = document.getElementById('hoverTarget1');
const circle2 = document.getElementById('hoverTarget2');
const tooltip = document.getElementById('tooltip');
const tooltip1 = document.getElementById('tooltip1');
const tooltip2 = document.getElementById('tooltip2');

circle.addEventListener('mousemove', (e) => {
  tooltip.style.left = `${e.pageX + 10}px`; // position slightly right of cursor
  tooltip.style.top = `${e.pageY + 10}px`;  // position slightly below cursor
  tooltip.style.opacity = 1;
});

circle.addEventListener('mouseleave', () => {
  tooltip.style.opacity = 0;
});

circle1.addEventListener('mousemove', (e) => {
  tooltip1.style.left = `${e.pageX + 10}px`; // position slightly right of cursor
  tooltip1.style.top = `${e.pageY + 10}px`;  // position slightly below cursor
  tooltip1.style.opacity = 1;
});

circle1.addEventListener('mouseleave', () => {
  tooltip1.style.opacity = 0;
});

circle2.addEventListener('mousemove', (e) => {
  tooltip2.style.left = `${e.pageX + 10}px`; // position slightly right of cursor
  tooltip2.style.top = `${e.pageY + 10}px`;  // position slightly below cursor
  tooltip2.style.opacity = 1;
});

circle2.addEventListener('mouseleave', () => {
  tooltip2.style.opacity = 0;
});