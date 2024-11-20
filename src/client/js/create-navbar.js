//const createHero = require('create-svg-hero');
import createNavBtn from './create-svg-nav-button.js';


const mainBody = document.getElementsByTagName('body')[0];

function createMenuItem(label, content, type){

    if( type == 'link' ){

        let menuLink = document.createElement('a');
        menuLink.href = content;
        menuLink.innerText = label;
        return menuLink;

    }
}

function createMenu(navbar, config, callback){

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    // start with menu closed
    const menu = document.createElement('div');
    menu.id = 'nav-menu';
    menu.classList.add('nav-close');

    for(let i = 0; i < config.menu.length ; i++){

        /*
            {
                label : 'Home',
                content : '/',
                type : 'link'
            }
        */

        let item = createMenuItem(
            config.menu[i].label, 
            config.menu[i].content, 
            config.menu[i].type
        )

        menu.appendChild(item)


        if( i == ( config.menu.length - 1 )){

            //navbar.childNode["navbar"].appendChild(menu);
            document.getElementById('navbar').appendChild(menuContainer);
            menuContainer.appendChild(menu);
            callback(navbar);

        };

    };

}


function createNavbar(config, callback){

    // create navbar ele
    const navbar = document.createElement('div');
    navbar.id = 'navbar';

    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'navbar-container';

    // append navbar content
    //navbarContainer.appendChild(createHero(config.colors))
    navbarContainer.appendChild(createNavBtn(config.colors))

    // append navbar to main HTML body
    navbar.appendChild(navbarContainer)
    mainBody.appendChild(navbar);

    //createMenu(navbar, config, (_navbar)=>{

        callback(navbar)

    //})

}

export default function(config, primaryCallback){

    createNavbar(config, (_navbar) => {

        createMenu(_navbar, config, (navbar)=>{

            primaryCallback(navbar)

        })
    
    })

}