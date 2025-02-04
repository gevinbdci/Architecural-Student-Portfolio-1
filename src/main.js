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


      ${/* Model 3 Commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
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
createThreeScene("#model2", "/objfiles/Models.obj");