document.getElementById('coachingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset all errors
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });

    // Validate form
    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone').value.trim();
    if (!phone) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Validate at least one goal is selected
    const goalsChecked = document.querySelectorAll('input[name="goal"]:checked').length > 0;
    if (!goalsChecked) {
        document.getElementById('goalError').style.display = 'block';
        isValid = false;
    }

    // Validate experience is selected
    const experienceChecked = document.querySelector('input[name="experience"]:checked');
    if (!experienceChecked) {
        document.getElementById('experienceError').style.display = 'block';
        isValid = false;
    }

    // Validate training split
    const split = document.getElementById('split').value.trim();
    if (!split) {
        document.getElementById('splitError').style.display = 'block';
        isValid = false;
    }

    // Validate roadblock
    const roadblock = document.getElementById('roadblock').value.trim();
    if (!roadblock) {
        document.getElementById('roadblockError').style.display = 'block';
        isValid = false;
    }

    // Validate investment commitment
    const investChecked = document.querySelector('input[name="ready_to_invest"]:checked');
    if (!investChecked) {
        document.getElementById('investError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Form is valid, submit it
        this.submit();
    }
});