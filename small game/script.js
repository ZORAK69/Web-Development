document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const submitButton = document.getElementById('submit');
    const resetButton = document.getElementById('reset');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    submitButton.addEventListener('click', () => {
        const userGuess = parseInt(document.getElementById('guess').value);
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the correct number!';
            message.style.color = 'green';
            submitButton.disabled = true;
        } else if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'red';
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    });

    resetButton.addEventListener('click', () => {
        attempts = 0;
        message.textContent = '';
        attemptsDisplay.textContent = 'Attempts: 0';
        document.getElementById('guess').value = '';
        submitButton.disabled = false;
    });
});
