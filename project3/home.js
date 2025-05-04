 // Select the button
 let button = document.querySelector('#buttonGreen');
 let button1 = document.querySelector('#buttonAbout');
 let button2 = document.querySelector('#buttonComment');
 let isGreen = false;

// Add click event listener to the button
button.addEventListener('click', function() {
    if (!isGreen) {
    document.body.style.backgroundImage = "url(green1.jpeg)"; 
    document.body.style.backgroundAttachement = "fixed"; 
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundColor = "#5B7329";
    button.style.background = "radial-gradient(#2a6730, #244027)";
    button.style.boxShadow = "0 0 20px 10px #244027";
    button.style.color = "white";
    button1.style.background = "radial-gradient(#2a6730, #244027)";
    button1.style.boxShadow = "0 0 20px 10px #244027";
    button1.style.color = "white";
    button2.style.background = "radial-gradient(#2a6730, #244027)";
    button2.style.boxShadow = "0 0 20px 10px #244027";
    button2.style.color = "white";
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
        button1.style.background = ""; // Reset button background
        button1.style.boxShadow = ""; // Reset button shadow
        button1.style.color = ""; // Reset button text color
        button2.style.background = ""; // Reset button background
        button2.style.boxShadow = ""; // Reset button shadow
        button2.style.color = ""; // Reset button text color
        
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

const mediaQuery = window.matchMedia('(max-width: 600px)');

function enableDesktopHover() {
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
}

function enableMobileTap() {
  circle.addEventListener('click', (e) => {
    tooltip.style.left = `${e.pageX + 10}px`; // position slightly right of cursor
    tooltip.style.top = `${e.pageY + 10}px`;  // position slightly below cursor
    tooltip.style.opacity = 1;
  });
  
  circle.addEventListener('click', () => {
    tooltip.style.opacity = 0;
  });
  
  circle1.addEventListener('click', (e) => {
    tooltip1.style.left = `${e.pageX + 10}px`; // position slightly right of cursor
    tooltip1.style.top = `${e.pageY + 10}px`;  // position slightly below cursor
    tooltip1.style.opacity = 1;
  });
  
  circle1.addEventListener('click', () => {
    tooltip1.style.opacity = 0;
  });
  
  circle2.addEventListener('click', (e) => {
    tooltip2.style.left = `${e.pageX + 10}px`; // position slightly right of cursor
    tooltip2.style.top = `${e.pageY + 10}px`;  // position slightly below cursor
    tooltip2.style.opacity = 1;
  });
  
  circle2.addEventListener('click', () => {
    tooltip2.style.opacity = 0;
  });
}

function handleScreenChange(e) {
  if (e.matches) {
    console.log("Mobile behavior activated");
    document.body.style.backgroundColor = '#f0f8ff';
    enableMobileTap();
  } else {
    console.log("Desktop behavior activated");
    document.body.style.backgroundColor = '#ffffff';
    enableDesktopHover();
  }
}

// Run it once at load
handleScreenChange(mediaQuery);

// Add listener for future changes
mediaQuery.addEventListener('change', handleScreenChange);