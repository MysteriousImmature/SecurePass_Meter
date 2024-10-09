document.getElementById('password').addEventListener('input', function () {
    let password = this.value;
    let strengthOutput = document.getElementById('strength-output');
    let lengthCriteria = document.getElementById('length');
    let uppercaseCriteria = document.getElementById('uppercase');
    let numberCriteria = document.getElementById('number');
    let specialCriteria = document.getElementById('special');

    let strength = 0;

    // Check length
    if (password.length >= 8) {
        lengthCriteria.classList.add('valid');
        lengthCriteria.classList.remove('invalid');
        strength++;
    } else {
        lengthCriteria.classList.add('invalid');
        lengthCriteria.classList.remove('valid');
    }

    // Check for uppercase
    if (/[A-Z]/.test(password)) {
        uppercaseCriteria.classList.add('valid');
        uppercaseCriteria.classList.remove('invalid');
        strength++;
    } else {
        uppercaseCriteria.classList.add('invalid');
        uppercaseCriteria.classList.remove('valid');
    }

    // Check for numbers
    if (/[0-9]/.test(password)) {
        numberCriteria.classList.add('valid');
        numberCriteria.classList.remove('invalid');
        strength++;
    } else {
        numberCriteria.classList.add('invalid');
        numberCriteria.classList.remove('valid');
    }

    // Check for special characters
    if (/[\W_]/.test(password)) {
        specialCriteria.classList.add('valid');
        specialCriteria.classList.remove('invalid');
        strength++;
    } else {
        specialCriteria.classList.add('invalid');
        specialCriteria.classList.remove('valid');
    }

    // Update strength output
    if (strength === 0) {
        strengthOutput.textContent = 'Strength: ';
    } else if (strength <= 2) {
        strengthOutput.textContent = 'Strength: Weak';
        strengthOutput.className = 'strength-output weak';
    } else if (strength === 3) {
        strengthOutput.textContent = 'Strength: Medium';
        strengthOutput.className = 'strength-output medium';
    } else if (strength === 4) {
        strengthOutput.textContent = 'Strength: Strong';
        strengthOutput.className = 'strength-output strong';
    }
});
