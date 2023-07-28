const dropdownArrowBackground = document.querySelector('#dropdown-arrow-background');
const upArrowBackground = document.querySelector('#up-arrow-background');
const dropdownArrowEducation = document.querySelector('#dropdown-arrow-education');
const upArrowEducation = document.querySelector('#up-arrow-education');
const dropdownArrowSkills = document.querySelector('#dropdown-arrow-skills');
const upArrowSkills = document.querySelector('#up-arrow-skills');
const closeButtons = document.querySelectorAll('.close');
const dropButtons = document.querySelectorAll('.dropdown-arrow');

dropdownArrowBackground.addEventListener('click', () => {
    const textToDisplay = dropdownArrowBackground.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowBackground.style.display = 'none';
});

dropdownArrowEducation.addEventListener('click', () => {
    const textToDisplay = dropdownArrowEducation.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowEducation.style.display = 'none';
});

dropdownArrowSkills.addEventListener('click', () => {
    const textToDisplay = dropdownArrowSkills.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowSkills.style.display = 'none';
});

closeButtons.forEach(button => {
    button.addEventListener('click', (e)=> {
        let infoDiv = e.target.parentNode;
        let dropButton = infoDiv.previousElementSibling.lastElementChild;
        dropButton.style.display = 'block';
        infoDiv.style.display = 'none';
    });
});




const body = document.querySelector('body');
const overlayButton = document.querySelector('#overlay-button');
const overlayDiv = document.querySelector('#overlay');

overlayButton.addEventListener('click', () => {
    overlayDiv.style.display = 'none';
    body.style.overflowY = 'unset';
});

overlayButton.addEventListener('click', () => {
    overlayDiv.style.display = 'none';
    body.style.overflowY = 'unset';
});