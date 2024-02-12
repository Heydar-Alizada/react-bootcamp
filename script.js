const greetingText = document.querySelector('#greeting');

document.getElementById('colorButton').addEventListener('click', function() {
    const randomColor = getRandomColor();
    greetingText.style.color = randomColor;
});

document.getElementById('textButton').addEventListener('click', function() {
    const newText = "Hello, JavaScript!";
    greetingText.innerText = newText;
});

// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
