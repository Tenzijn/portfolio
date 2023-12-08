import '../style/style.css';
import '../style/theme.css';
import tenzinAvatar from '../assets/img/me.webp';
import codeAcademy from '../assets/img/code-academy-clone.png';
import covidTibet from '../assets/img/covid-tibet-dev.png';
import tibetcommunity from '../assets/img/tibetcommunity.png';

// components
import { myJourney, projects } from './components/data.js';

document.querySelector('#app').innerHTML = `
<!-- Navigation-->
<nav
  class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
  id="sideNav"
>
  <a class="navbar-brand js-scroll-trigger" href="#page-top">
    <span class="d-block d-lg-none">Tenzin Kunchok</span>
    <span class="d-none d-lg-block"
      ><img
        class="img-fluid img-profile rounded-circle mx-auto mb-2"
        src=${tenzinAvatar}
        alt="tenzin's avatar"
    /></span>
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarResponsive"
    aria-controls="navbarResponsive"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#experience"
          >My Journey</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#education"
          >Education</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#interests"
          >Interests</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#awards">Projects</a>
      </li>
      <!-- theme toggle button with icons -->
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href="#" id="theme-toggle">
          <i class="fas fa-sun"> </i>
        </a>
        <a
          class="nav-link js-scroll-trigger d-none"
          href="#"
          id="theme-toggle"
        >
          <i class="fas fa-moon link-dark"> </i>
        </a>
      </li>
    </ul>
  </div>
</nav>
<!-- Page Content-->
<div class="container-fluid p-0">
  <!-- About-->
  <section class="resume-section" id="about">
    <div class="resume-section-content">
      <h1 class="mb-0">
        Tenzin
        <span class="text-primary">Kunchok</span>
      </h1>
      <div class="subheading mb-5">
        Amsterdam · (06) 38-94-7645 ·
        <a href="mailto:name@email.com">tenzinkunchok2022@gmail.com</a>
      </div>
      <p class="lead mb-5">
        <b>Hello! 👋 </b> I'm a self-taught full-stack developer 💻 driven
        by a relentless curiosity for technology 🕸️. I thrive on the dynamic
        nature of the tech world 🌏, constantly learning and adapting to
        stay at the forefront of innovation. Fluent in four languages 🏳️ 🇳🇱
        🇬🇧 🇮🇳 , I believe effective communication is as crucial as writing
        impeccable code . My journey began in Tibet, where I developed a
        deep appreciation for cultural diversity, and now, I call Amsterdam
        home.
        <br />
        Beyond coding, my passion extends to graphic design 🤔, photography
        📸 , and videography 🎥. I find joy in crafting visual narratives
        that complement my technical skills. Exploring new programming
        languages is not just a professional endeavor but also a creative
        outlet. This unique blend of technical acumen and a multicultural
        background, coupled with a keen interest in the visual arts, allows
        me to approach challenges with a holistic and creative perspective.
      </p>
      <div class="social-icons">
        <a
          class="social-icon"
          href="https://www.linkedin.com/in/tenzin-kunchok-669592240/"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a class="social-icon" href="https://github.com/Tenzijn/Tenzijn"
          ><i class="fab fa-github"></i
        ></a>
        <a class="social-icon" href="https://twitter.com/Tenzin7623"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          class="social-icon"
          href="https://www.facebook.com/profile.php?id=100080902160722"
          ><i class="fab fa-facebook-f"></i
        ></a>
      </div>
    </div>
  </section>
  <hr class="m-0" />
  <!-- Experience-->
  <section class="resume-section" id="experience">
    <div class="resume-section-content" id="resume-section">
      <h2 class="mb-5">My Journey</h2>
      <!-- Events in my life -->
      <!-- content from js -->
    </div>
  </section>
  <hr class="m-0" />
  <!-- Education-->
  <section class="resume-section" id="education">
    <div class="resume-section-content">
      <h2 class="mb-5">Education</h2>
      <div
        class="d-flex flex-column flex-md-row justify-content-between mb-5"
      >
        <div class="flex-grow-1">
          <h3 class="mb-0">University of Open Source</h3>
          <div class="subheading mb-3">Self-taught</div>
          <p>
            In the absence of formal education, my journey is a testament to
            the power of self-directed learning. Armed with curiosity and
            fueled by passion, I've navigated the realms of technology,
            linguistics, and community building. Every line of code, each
            linguistic conquest, and every digital project is not just a
            skill acquired but a testament to resilience and a hunger for
            knowledge. In a world where self-learning is often undervalued,
            my journey stands as proof that dedication and self-motivation
            can be formidable teachers. I am not just a learner; I am a
            self-taught architect of my own educational narrative.
          </p>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">2019 - lifelong commitment</span>
        </div>
      </div>
    </div>
  </section>
  <hr class="m-0" />
  <!-- Skills-->
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">Skills</h2>
      <div class="subheading mb-3">Programming Languages & Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
        <li class="list-inline-item"><i class="fab fa-react"></i></li>
        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
        <li class="list-inline-item"><i class="fab fa-github"></i></li>
        <li class="list-inline-item"><i class="fab fa-git"></i></li>
        <li class="list-inline-item"><i class="fab fa-bootstrap"></i></li>
        <li class="list-inline-item"><i class="fab fa-aws"></i></li>
      </ul>
      <div class="subheading mb-3">OS</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item"><i class="fab fa-linux"></i></li>
        <li class="list-inline-item"><i class="fab fa-apple"></i></li>
        <li class="list-inline-item"><i class="fab fa-windows"></i></li>
      </ul>

      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Mobile-First, Responsive Design
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Cross Browser Testing & Debugging
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Cross Functional Teams
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Agile Development & Scrum
        </li>
      </ul>
    </div>
  </section>
  <hr class="m-0" />
  <!-- Interests-->
  <section class="resume-section" id="interests">
    <div class="resume-section-content">
      <h2 class="mb-5">Interests</h2>
      <p>
        Beyond the screen and code, my heart finds joy in the simple
        pleasures of life. Family is not just a chapter but the cornerstone
        of my story—a source of inspiration and grounding. When not immersed
        in the digital tapestry, you'll likely find me on the racket court,
        where the rhythmic dance of the game becomes a physical counterpart
        to my digital endeavors. And then there are movies—a canvas of
        stories, emotions, and cinematic artistry. Whether it's the thrill
        of a suspenseful plot or the warmth of a family drama, I find solace
        and entertainment in the cinematic world. In these diverse passions
        lies the balance that shapes my narrative, where family, sports, and
        the silver screen coalesce to paint a more colorful, well-rounded
        portrait beyond the binary lines of code.
      </p>
      <p class="mb-0">
        When forced indoors, I follow a number of sci-fi and fantasy genre
        movies and television shows, I am an aspiring chef, and I spend a
        large amount of my free time exploring the latest technology
        advancements in the front-end web development world.
      </p>
    </div>
  </section>
  <hr class="m-0" />
  <!-- Awards-->
  <section class="resume-section" id="awards">
    <div class="resume-section-content">
      <h2 class="mb-5">Projects & Achievements</h2>
      <div class="row text-dark" id="project-card-container">
        <!-- content from js -->
        </div>
        <!-- card container ends here -->
      </div>
    </div>
  </section>
</div>
`;

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
