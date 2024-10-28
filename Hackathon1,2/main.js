var toggleButton = document.getElementById('toggle-skills');
var user = document.getElementById('versatile');
toggleButton.addEventListener('click', function () {
    if (user.style.display === 'none') {
        user.style.display = 'block';
    }
    else {
        user.style.display = 'none';
    }
});
