AFRAME.registerComponent('backhome', {
  
  
init function () {
  
  let homeworldelements = document.querySelectorAll(".homeworld");
  let sky = document.querySelector("#skyview");
                                   
                                   
  let gobackhome = () => {
  sky.setAttribute("src", '#skyview');
  homeworldelements.forEach(homeworldelements) => {
  homeworldelement.setAttribute("visible", true)})
  
  }
  
  this.el.addEventListener("click", gobackhome);
  
  
}});