// Create the navigation bar
const navBar = document.createElement('nav');

// JavaScript to dynamically generate navigation links
// Define your navigation links here
const navLinks = [
  { text: 'Home', href: '#' },
  { text: 'About', href: '#' },
  { text: 'Services', href: '#' },
  { text: 'Contact', href: '#' }
  // Add more links as needed
];

// Generate navigation links dynamically
navLinks.forEach(link => {
  const anchor = document.createElement('a');
  anchor.textContent = link.text;
  anchor.href = link.href;
  anchor.classList = ["underline-hover"]
  navBar.appendChild(anchor);
});

const targetParent = document.querySelector('body');
const targetDiv = document.querySelector('main');

// Step 4: Insert the new div ahead of the target div
targetParent.insertBefore(navBar, targetDiv);

// Append the navigation bar to the body of the document
// document.body.appendChild(navBar);

// Wait for the HTML content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the button and the element to change color
    var colorChangeButton = document.getElementById('colorChangeButton');
    var textToChange = document.getElementById('textToChange');

    // Add a click event listener to the button
    colorChangeButton.addEventListener('click', function () {
        // Change the text color to a random color
        textToChange.style.color = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

});
