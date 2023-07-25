const dropdownArrowBackground = document.querySelector('#dropdown-arrow-background');

dropdownArrowBackground.addEventListener('click', () => {
    const textToDisplay = dropdownArrowBackground.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowBackground.style.display = 'none';
});

const upArrowBackground = document.querySelector('#up-arrow-background');

upArrowBackground.addEventListener('click', () => {
    const textToHide = upArrowBackground.parentNode;
    textToHide.style.display = 'none';
    dropdownArrowBackground.style.display = 'block';
});

const dropdownArrowEducation = document.querySelector('#dropdown-arrow-education');

dropdownArrowEducation.addEventListener('click', () => {
    const textToDisplay = dropdownArrowEducation.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowEducation.style.display = 'none';
});

const upArrowEducation = document.querySelector('#up-arrow-education');

upArrowEducation.addEventListener('click', () => {
    const textToHide = upArrowEducation.parentNode;
    textToHide.style.display = 'none';
    dropdownArrowEducation.style.display = 'block';
});

const dropdownArrowSkills = document.querySelector('#dropdown-arrow-skills');

dropdownArrowSkills.addEventListener('click', () => {
    const textToDisplay = dropdownArrowSkills.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowSkills.style.display = 'none';
});

const upArrowSkills = document.querySelector('#up-arrow-skills');

upArrowSkills.addEventListener('click', () => {
    const textToHide = upArrowSkills.parentNode;
    textToHide.style.display = 'none';
    dropdownArrowSkills.style.display = 'block';
});