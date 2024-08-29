function toggleMode() {
    document.body.classList.toggle('dark-mode');

    const modeToggle = document.getElementById('modeToggle');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
}

function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const resultDiv = document.getElementById('result');

    if (!day || !month || !year) {
        resultDiv.textContent = 'Please enter a valid date of birth.';
        return;
    }

    if (month < 1 || month > 12) {
        resultDiv.textContent = 'Please enter a valid month (1-12).';
        return;
    }

    if (day < 1 || day > 31) {
        resultDiv.textContent = 'Please enter a valid day (1-31).';
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    let actualAge = age;
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        actualAge--;
    }

    if (birthDate > today) {
        resultDiv.textContent = 'Birth date cannot be in the future!';
    } else {
        resultDiv.textContent = `Your age is ${actualAge} years.`;
    }
}