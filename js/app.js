const dropArrow = document.querySelector('#dropdown-arrow');

dropArrow.addEventListener('click', () => {
    const textToDisplay = dropArrow.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropArrow.style.display = 'none';
});

const upArrow = document.querySelector('.up-arrow');

upArrow.addEventListener('click', () => {
    const textToHide = upArrow.parentNode;
    textToHide.style.display = 'none';
    dropArrow.style.display = 'block';
});
