// Create an array of navigation links
const navLinks = [
  { text: 'Home', href: '#' },
  { text: 'About', href: '#about' },
  { text: 'Contact', href: '#contact' }
];

// Create the navigation bar
const navBar = document.createElement('nav');
const navList = document.createElement('ul');

navLinks.forEach(link => {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.textContent = link.text;
  anchor.href = link.href;

  listItem.appendChild(anchor);
  navList.appendChild(listItem);
});

navBar.appendChild(navList);

// Append the navigation bar to the body of the document
document.body.appendChild(navBar);

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
