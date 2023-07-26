const dropdownArrowBackground = document.querySelector('#dropdown-arrow-background');
const upArrowBackground = document.querySelector('#up-arrow-background');
const dropdownArrowEducation = document.querySelector('#dropdown-arrow-education');
const upArrowEducation = document.querySelector('#up-arrow-education');
const dropdownArrowSkills = document.querySelector('#dropdown-arrow-skills');
const upArrowSkills = document.querySelector('#up-arrow-skills');
const closeButtons = document.querySelectorAll('.close');
const dropButtons = document.querySelectorAll('.dropdown-arrow');

dropdownArrowBackground.addEventListener('focus', () => {
    const textToDisplay = dropdownArrowBackground.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowBackground.style.display = 'none';
});

// upArrowBackground.addEventListener('focus', () => {
//     const textToHide = upArrowBackground.parentNode.nextElementSibling;
//     textToHide.style.display = 'none';
//     dropdownArrowBackground.style.display = 'block';
//     upArrowBackground.style.display = 'none';
// });

dropdownArrowEducation.addEventListener('focus', () => {
    const textToDisplay = dropdownArrowEducation.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowEducation.style.display = 'none';
    // upArrowEducation.style.display = 'block';
});

// upArrowEducation.addEventListener('focus', () => {
//     const textToHide = upArrowEducation.parentNode.nextElementSibling;
//     textToHide.style.display = 'none';
//     dropdownArrowEducation.style.display = 'block';
//     upArrowEducation.style.display = 'none';
// });

dropdownArrowSkills.addEventListener('focus', () => {
    const textToDisplay = dropdownArrowSkills.parentNode.nextElementSibling;
    textToDisplay.style.display = 'block';
    dropdownArrowSkills.style.display = 'none';
    // upArrowSkills.style.display = 'block';
});

// upArrowSkills.addEventListener('focus', () => {
//     const textToHide = upArrowSkills.parentNode.nextElementSibling;
//     textToHide.style.display = 'none';
//     dropdownArrowSkills.style.display = 'block';
//     upArrowSkills.style.display = 'none';
// });

closeButtons.forEach(button => {
    button.addEventListener('focus', (e)=> {
        let infoDiv = e.target.parentNode;
        let dropButton = infoDiv.previousElementSibling.lastElementChild;
        dropButton.style.display = 'block';
        infoDiv.style.display = 'none';
    });
});




const body = document.querySelector('body');
const overlayButton = document.querySelector('#overlay-button');
const overlayDiv = document.querySelector('#overlay');

overlayButton.addEventListener('focus', () => {
    overlayDiv.style.display = 'none';
    body.style.overflowY = 'unset';
});