///////////////////////////////////////////////////////////////////////
//                  DROPDOWN ARROWS/POP UP BOX                       //
//////////////////////////////////////////////////////////////////////

const dropdownArrowBackground = document.querySelector('#dropdown-arrow-background');
const dropdownArrowEducation = document.querySelector('#dropdown-arrow-education');
const dropdownArrowSkills = document.querySelector('#dropdown-arrow-skills');
const popUpDiv = document.querySelector('#pop-up-div');

dropdownArrowBackground.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hide')) {
        popUpDiv.classList.remove('hide');
    }

    popUpDiv.innerHTML = `<div id='pop-up-box'>
                            <button class="close">x</button>
                            <p>I'm an aspiring web developer in search of an entry-level position in front-end web development. I really enjoy designing beautiful web pages and letting my perfectionist <em>and</em> my creative side run wild with layout, formatting, color schemes, aesthetics, fun JavaScript functionality, etc.</p>
                            <p>I'm striving for a career that will be interesting, stable, challenging, and fulfilling. My strengths include straightforward and respectful communication, grammar and writing proficiency, and a good eye for design.</p>
                            <p>I look forward to working in a team-oriented, fun, and challenging workplace environment. If I sound like a good fit for your team, please add me to your contacts list and feel free to shoot me a message below! (The form works.. Don't worry--I double-checked)</p>
                        </div>`;

    let closeButton = document.querySelector('.close');
    closeButton.focus();
});

dropdownArrowEducation.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hide')) {
        popUpDiv.classList.remove('hide');
    }
    
    popUpDiv.innerHTML = `<div id='pop-up-box'>
                            <button class="close">x</button>
                            <ul id="education">
                                <li>Louisiana State University: Bachelor's Degree</li>
                                <li>FreeCodeCamp</li>
                                <li>Treehouse: Front-End Web Development Track</li>
                                <li>Treehouse: Front-End Web Development Techdegree</li>
                            </ul>
                        </div>`;

    let closeButton = document.querySelector('.close');
    closeButton.focus();
});

dropdownArrowSkills.addEventListener('click', () => {
    if (popUpDiv.classList.contains('hide')) {
        popUpDiv.classList.remove('hide');
    }
    
    popUpDiv.innerHTML =    `<div id='pop-up-box'>
                                <button class="close">x</button>
                                <ul id="skills">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                        <ul class="sublist">
                                            <li>Grid</li>
                                            <li>Flexbox</li>
                                            <li>Transforms and Transitions</li>
                                            <li>Keyframe Animations</li>
                                            <li>Sass</li>
                                            <ul>
                                                <li class="sublist-level-2">and more!</li>
                                            </ul>                            
                                        </ul>
                                    <li>JavaScript</li>
                                        <ul class="sublist">
                                            <li>DOM Selectors</li>
                                            <li>DOM Manipulation</li>
                                            <li>DOM Traversal</li>
                                            <li>Callback functions</li>
                                            <li>Array Methods</li>
                                            <li>Array Iteration Methods</li>
                                            <li>Object-Oriented JavaScript</li>
                                            <li>Object Interactions</li>
                                            <li>Callback Functions</li>
                                            <li>Fetch API</li>
                                                <ul>
                                                    <li class="sublist-level-2">and more!</li>
                                                </ul>
                                        </ul>
                                    <li>Responsive Design</li>
                                    <li>Bootstrap</li>
                                    <li>Github</li>
                                    <li>SVG Basics</li>
                                    <li>JQuery</li>
                                    <li>AJAX Basics</li>
                                    <li>Debugging with Chrome DevTools</li>
                                    <li>Web Design</li>
                                    <li>Accessibility</li>
                                    <li>Familiarity with Resources</li>
                                    <li>Currently Working On:</li>
                                        <ul>
                                            <li>Practicing & Solidifying Previously-Listed Skills</li>
                                            <li>Completing Treehouse Web Design Track</li>
                                            <li>Refactoring & Improving Portfolio Projects</li>
                                        </ul>
                                    <li>Want to Learn Next:</li>
                                        <ul>
                                            <li>C# Basics</li>
                                            <li>SQL</li>
                                        </ul>
                                </ul>
                                <p>Check out my <a tabindex="0" href="https://teamtreehouse.com/profiles/victoriafuselier" target="_blank">Treehouse Profile</a> to see what I've been up to and what I'm currently learning!</p>
                            </div>`;

    let closeButton = document.querySelector('.close');
    closeButton.focus();                            
});


popUpDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        popUpDiv.classList.add('hide');
        popUpDiv.innerHTML = ``;
        popUpDiv.style.height = '0px';
    }
});


///////////////////////////////////////////////////////////////////////
//                              OVERLAY                             //
//////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////
//                        PROJECT LINKS                             //
//////////////////////////////////////////////////////////////////////

const projectLinks = document.querySelectorAll('.project-links');

projectLinks.forEach(link => {
    link.addEventListener('focus', (e) => {
        let photoOverlay = e.target.parentNode;
        photoOverlay.style.opacity = 1;
    });
    link.addEventListener('focusout', (e) => {
        let photoOverlay = e.target.parentNode;
        photoOverlay.style.opacity = 0;
    });
});

///////////////////////////////////////////////////////////////////////
//                      PROJECT OVERLAY                             //
//////////////////////////////////////////////////////////////////////

const projectContainers = document.querySelectorAll('.project-container');

projectContainers.forEach(container, () => {
    container.addEventListener('mouseover', (e)=> {
        let photoOverlay = e.target.querySelector('.photo-overlay');
        photoOverlay.style.opacity = '1';
    });
    container.addEventListener('mouseout', (e) => {
        let photoOverlay = e.target.querySelector('.photo-overlay');
        photoOverlay.style.opacity = '0';
    });
});