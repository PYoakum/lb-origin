import createMainView from './create-main-view.js';
import createFooter from './create-footer.js';
import createNavbar from './create-navbar.js';
import navbarActions from './navbar-actions.js';

const contentUrl = 'https://prototype-config.peteryoakum.workers.dev/api/content'

export default async function fetchContent(config){
  await fetch(contentUrl, {
    method: 'GET', 
    mode: 'cors', 
    cache: 'default',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer'
  }).then(
    response => response.json()
  ).then(data => {
    
    let content = data;

    // create main view
    createMainView(content); 

    // create footer
    createFooter(config.footer)

    // create navbar
    createNavbar(config, (navbar)=>{
        
      navbarActions(navbar)

    });   
    
  });
}