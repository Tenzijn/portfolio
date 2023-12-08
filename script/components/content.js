import { myJourney, projects } from './data.js';

window.addEventListener('DOMContentLoaded', (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

/********************THEME TOGGLE BUTTON********************* */
// select the target node id theme-toggle and add event listener
const themeToggle = document.querySelectorAll('#theme-toggle');
themeToggle.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Toggle visibility of the two elements
    themeToggle.forEach((t) => {
      if (t.classList.contains('d-none')) {
        t.classList.remove('d-none');
      } else {
        t.classList.add('d-none');
      }
    });
  });
});

/*********************JOURNEY or Resume SECTION********************* */
// sort the journey by id in descending order to display the latest event first
let resume = myJourney.sort((a, b) => {
  return b.id - a.id;
});

let classesForMyJourneyContainer = [
  'd-flex',
  'flex-column',
  'flex-md-row',
  'justify-content-between',
  'mb-5',
];

let resumeSection = document.querySelector('#resume-section');
resume.forEach((journey) => {
  const eventInMyJourney = document.createElement('div');
  eventInMyJourney.classList.add(...classesForMyJourneyContainer);
  eventInMyJourney.innerHTML = `<div class="flex-grow-1">
    <h3 class="mb-0">${journey.title}</h3>
    <div class="subheading mb-3">${journey.subtitle}</div>
    <p>
        ${journey.content}
    </p>
</div>
<div class="flex-shrink-0">
    <span class="text-primary">${journey.time} </span>
</div>`;
  resumeSection.appendChild(eventInMyJourney);
});

/*********************project SECTION********************* */
let allProjects = projects.sort((a, b) => {
  return b.id - a.id;
});
const projectSection = document.querySelector('#project-card-container');
let classesForProjectContainer = ['col-md-6', 'col-lg-4'];
allProjects.forEach((project) => {
  let projectPrograms = project.programs
    .map((program) => {
      return `<i class="fab fa-${program} fs-2 p-2"></i>`;
    })
    .join('');
  console.log(projectPrograms);
  const projectCard = document.createElement('div');
  projectCard.classList.add(...classesForProjectContainer);
  projectCard.innerHTML = `
                <div class="card m-2">
                  <img
                    class="card-img-top"
                    src=${project.image}
                    alt=${project.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text text-center">
                    ${projectPrograms}
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      ${project.subtitle} 👉
                      <a href=${project.link}> visit</a>
                    </small>
                  </div>
                </div>
  `;
  projectSection.appendChild(projectCard);
});
