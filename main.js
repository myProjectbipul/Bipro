const home = document.querySelector(".Home");
const project = document.querySelector(".Project");
const about = document.querySelector(".About");
const contact = document.querySelector(".contact");
const homeD = document.querySelector(".homeD");
const aboutD = document.querySelector(".aboutD");
const projectD = document.querySelector(".projectD");
const contactD = document.querySelector(".contactD");

home.addEventListener("click", () =>{
  projectD.classList.add("none");
  aboutD.classList.add("none");
  contactD.classList.add("none");
  homeD.classList.remove("none");
  home.classList.add("activeD");
  project.classList.remove("activeD");
  about.classList.remove("activeD");
  contact.classList.remove("activeD");
  
  
  


});

project.addEventListener("click", () =>{
  projectD.classList.remove("none");
  aboutD.classList.add("none");
  contactD.classList.add("none");
  homeD.classList.add("none");
  home.classList.remove("activeD");
  project.classList.add("activeD");
  about.classList.remove("activeD");
  contact.classList.remove("activeD");


});

contact.addEventListener("click", () =>{
  projectD.classList.add("none");
  aboutD.classList.add("none");
  contactD.classList.remove("none");
  homeD.classList.add("none");
  home.classList.remove("activeD");
  project.classList.remove("activeD");
  about.classList.remove("activeD");
  contact.classList.add("activeD");


});
about.addEventListener("click", () =>{
  projectD.classList.add("none");
  aboutD.classList.remove("none");
  contactD.classList.add("none");
  homeD.classList.add("none");
  home.classList.remove("activeD");
  project.classList.remove("activeD");
  about.classList.add("activeD");
  contact.classList.remove("activeD");


});


