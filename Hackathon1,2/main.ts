var toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
var user = document.getElementById('versatile') as HTMLElement 

toggleButton.addEventListener('click', () => {
    if(user.style.display === 'none'){
        user.style.display = 'block'
    } else {
        user.style.display = 'none'
    }
});