import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

const Project1 = [
  "./Project1/CE1.jpg",
  "./Project1/CE2.jpg",
  "./Project1/CE3.jpg",
  "./Project1/CE4.jpg",
];

const Project2 = [
  "./Project2/Chart1.png",
  "./Project2/Chart2.png",
  "./Project2/Chart3.png",
  "./Project2/ChartOverall.jpg",
];

const Project3 = [
  "./Project3/1ctd.png",
  "./Project3/2ctd.png",
  "./Project3/3ctd.png",
  "./Project3/4ctd.png",
];

const Project4 = [
  "./Project4/1pot.png",
  "./Project4/2pot.png",
  "./Project4/3pot.png",
  "./Project4/4pot.png",
];

const Project5 = [
  "./Project5/1tww.png",
  "./Project5/2tww.png",
  "./Project5/3tww.png",
  "./Project5/4tww.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Assignment 1: Cadavre Exquis
        <div class="three-model">
          <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project1/GatilogoCE.jpg" target="_blank">
            <img src="./Project1/GatilogoCE.jpg" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">

          ${/*
          <div id="images">
            ${Project1
              .map(
                (CE, index) => 
                  `<img src="${CE}" alt="CE${index + 1}" />`
              )
              .join("")}
          </div>
          */""}
        
          <div id="images">
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project1/CE1.jpg" target="_blank">
              <img src="./Project1/CE1.jpg" alt="CE1" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project1/CE2.jpg" target="_blank">
              <img src="./Project1/CE2.jpg" alt="CE2" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project1/CE3.jpg" target="_blank">
              <img src="./Project1/CE3.jpg" alt="CE3" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project1/CE4.jpg" target="_blank">
              <img src="./Project1/CE4.jpg" alt="CE4" />
            </a>
          </div>

          <h4 id="description">'Humanity in the Illusions of Time'</h4>
            <h4 id="description2">Our first assigned assignment. My core philosophy comes from the curiosity of the purpose of humanity in existence. Why and how do we exist? My philosophy will focus on four main components: Space, Time, Rock, and Equal. These words will compose and ponder on the meaning and manifesto of my Cadavre Exquis. I can imagine that, each individual are born and will die equally. We are all equally living/breathing in the same floating rock in space where time can be irrelevant. Time that can be an illusion or be infinite.</h4>
        </div>
      </div>


      <div id="project-row">
      Assignment 2: Interoperability
        <div class="three-model">
        ${/*<a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project2/ChartOverall.jpg" target="_blank">
            <img src="./Project2/ChartOverall.jpg" id="model2" alt="Model 2 Image" />
        */""}
          <div id="model2"></div>
        </div>
        <div id="images-description">
          
          <div id="images">
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project2/Chart1.png" target="_blank">
              <img src="./Project2/Chart1.png" alt="Chart1" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project2/Chart2.png" target="_blank">
              <img src="./Project2/Chart2.png" alt="Chart2" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project2/Chart3.png" target="_blank">
              <img src="./Project2/Chart3.png" alt="Chart3" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project2/Models.png" target="_blank">
              <img src="./Project2/Models.png" alt="Models" />
            </a>
          </div>

          <h4 id="description">'Geo and Interoperability'</h4>
            <h4 id="description2">Interoperability is an interesting way of finding data and using it for design in terms of applying different methods into a single output, especially in 3D modelling. Making the analyzing chart has shown me how to create a system to differentiate the varying methods to use for the 3D design. It may be time consuming, but the results of the data can be very informing. From the charts, I found out the differences of the conversions. Some may have similar characteristics. </h4>
        </div>
      </div>

 
      <div id="project-row">
      Assignment 3: Object Design
        <div class="three-model">
          <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project3/P3cover.png" target="_blank">
            <img src="./Project3/P3cover.png" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
        
          <div id="images">
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project3/1ctd.png" target="_blank">
              <img src="./Project3/1ctd.png" alt="1ctd" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project3/2ctd.png" target="_blank">
              <img src="./Project3/2ctd.png" alt="2ctd" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project3/3ctd.png" target="_blank">
              <img src="./Project3/3ctd.png" alt="3ctd" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project3/4ctd.png" target="_blank">
              <img src="./Project3/4ctd.png" alt="4ctd" />
            </a>
          </div>

          <h4 id="description">'CTD / Complicated Time Device'</h4>
            <h4 id="description2">'CTD' also known as 'Complicated Time Device' plays with the concept of time manipulation. It features a time stop, time rewind, and a one-time forward travel. In a fictional world, the story of this clock is mysterious. None other than the user can only see and know this device exists. The purpose of this device is to give the user a chance to relive their past and find some meaning from it, at least.</h4>
        </div>
      </div>


      <div id="project-row">
      Assignment 4: Placemaking
        <div class="three-model">
          <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project4/P4cover .png" target="_blank">
            <img src="./Project4/P4cover .png" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">

          <div id="images">
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project4/1pot.png" target="_blank">
              <img src="./Project4/1pot.png" alt="1pot" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project1/CE2.jpg" target="_blank">
              <img src="./Project4/2pot.png" alt="2pot" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project1/CE3.jpg" target="_blank">
              <img src="./Project4/3pot.png" alt="3pot" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project1/CE4.jpg" target="_blank">
              <img src="./Project4/4pot.png" alt="4pot" />
            </a>
          </div>

          <h4 id="description">'Passage of Time'</h4>
            <h4 id="description2">Explores the evolution of architecture through a form that symbolizes the flow and passage of time. From the ground up, the past serves as the foundation for contemporary designs, while continuously influencing speculative futures. The title, Passage of Time, draws on the dual meaning of "passage"—representing both the journey through generations and lifetimes, and the structural embodiment of change that evolves over time.</h4>
        </div>
      </div>


      <div id="project-row">
      Assignment 5: Game Engines
        <div class="three-model">
          <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project5/P5cover.png" target="_blank">
            <img src="./Project5/P5cover.png" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">


          <div id="images">
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project5/1tww.png" target="_blank">
              <img src="./Project5/1tww.png" alt="1tww" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project5/2tww.png" target="_blank">
              <img src="./Project5/2tww.png" alt="2tww" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project5/3tww.png" target="_blank">
              <img src="./Project5/3tww.png" alt="3tww" />
            </a>
            <a href="https://gevin-gatilogo-architecural-student-portfolio-1-coral.vercel.app/Project5/4tww.png" target="_blank">
              <img src="./Project5/4tww.png" alt="4tww" />
            </a>
          </div>

          <h4 id="description">'Timeless (Wonder) Wasteland'</h4>
            <h4 id="description2">In this final project, my thought process was to incorporate the theme of time with the overarching assignment and final studio outcomes together. From there, the ‘Timeless Wonder Wasteland‘ was created. In this setting, the avatar/characters find that they are lost in a wasteland of objects (representing all the assignments and studio outcomes) and transverse through what seems to be a timeless void. No words, no sounds, no voices, and no other living beings. Just an open timeless floating world in ruins, after being transported through an indefinite spatial metaverse reality.</h4>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
createThreeScene("#model2", "/objfiles/Models2.obj");