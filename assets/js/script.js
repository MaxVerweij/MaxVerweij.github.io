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
