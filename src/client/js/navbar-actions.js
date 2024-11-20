function transformButton(menuCollapse){

    let topBar = document.getElementById('top-bar');
    let middleBar = document.getElementById('mid-bar');
    let bottomBar = document.getElementById('bottom-bar');
  
    if(menuCollapse == false){
  
      topBar.setAttribute("transform", "rotate(0) translate(0,00) scale(1,1)");
      middleBar.setAttribute("transform","rotate(0) translate(0,0) scale(1, 1)");
      bottomBar.setAttribute("transform", "rotate(0) translate(0,0) scale(1, 1)");
      
  
    } else if(menuCollapse == true){
  
      topBar.setAttribute("transform", "rotate(45) translate(6.55,-9) scale(0.75, 1)");
      middleBar.setAttribute("transform","rotate(0) translate(0.1,0) scale(0.9, 1)");
      bottomBar.setAttribute("transform", "rotate(-45) translate(-7.25,3) scale(0.75, 1)");
  
    }
    
  }
  
export default function navbarActions(navbar){
  
    const navbarContainer = document.getElementById("navbar-container");
    const navBtn = document.getElementById("nav-button");
  
    var menuCollapse = true;
      
    navBtn.addEventListener(
      'click', 
      (e)=>{
  
        if(menuCollapse === false){
  
          transformButton(menuCollapse)
          document.getElementById('nav-menu').classList.remove('nav-open');
          document.getElementById('nav-menu').classList.add('nav-close');
          
          menuCollapse = true
  
        } else if(menuCollapse === true){
  
          transformButton(menuCollapse)
          
          document.getElementById('nav-menu').classList.remove('nav-close');
          document.getElementById('nav-menu').classList.add('nav-open');
          menuCollapse = false
  
        }
      }
    )
      
  }