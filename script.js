
document.getElementById('random-number-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (min >= max) {
        alert('The "To" value must be greater than the "From" value.');
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = `Random Number: ${randomNumber}`;
});
