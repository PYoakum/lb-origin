export default function createNavBtn(colors) {

    const buttonValues = {
        id : 'nav-button',
        viewBox : '0 0 20.087475 19.84375',
        width : 75.921,
        height : 75,
        path : {
            topBar : {
                id :'top-bar',
                d : 'M 4.227792,4.146549 V 7.321298 H 15.859694 V 4.146549 Z',
                style : 'fill:'+colors.topBarColor+';'
            },
            middleBar : {
                id :'mid-bar',
                d : 'm 4.227792,8.293097 v 3.17475 h 11.631902 v -3.17475 z',
                style : 'fill:'+colors.middleBarColor+';'
            },
            bottomBar : {
                id :'bottom-bar',
                d : 'm 4.227792,12.441208 v 3.17475 l 11.631902,-0.0016 v -3.17475 z',
                style : 'fill:'+colors.bottomBarColor+';'
            },
            borderPart : {
                id :'border-part',
                d : 'M 0,0 V 19.84375 H 20.087474 V 0 Z M 3.17475,3.17475 H 16.912724 V 16.669 H 3.17475 Z',
                style : 'fill:'+colors.borderColor+';'
            }
        }
    }
    
    // nav button
    const navButtonSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    navButtonSvg.id = buttonValues.id;
    navButtonSvg.setAttribute('viewBox', buttonValues.viewBox);
    navButtonSvg.setAttribute('width', buttonValues.width);
    navButtonSvg.setAttribute('height', buttonValues.height);
    navButtonSvg.setAttribute('transform', 'rotate(0)')
    
    const navButtonTopBar = document.createElementNS("http://www.w3.org/2000/svg", "path");
    navButtonTopBar.id = buttonValues.path.topBar.id;
    navButtonTopBar.setAttribute('d', buttonValues.path.topBar.d);
    navButtonTopBar.setAttribute('style', buttonValues.path.topBar.style);
    navButtonTopBar.setAttribute('transform', 'rotate(0)')
    
    const navButtonMiddleBar = document.createElementNS("http://www.w3.org/2000/svg", "path");
    navButtonMiddleBar.id = buttonValues.path.middleBar.id;
    navButtonMiddleBar.setAttribute('d', buttonValues.path.middleBar.d);
    navButtonMiddleBar.setAttribute('style', buttonValues.path.middleBar.style);
    navButtonMiddleBar.setAttribute('transform', 'rotate(0)')
    
    const navButtonBottomBar = document.createElementNS("http://www.w3.org/2000/svg", "path");
    navButtonBottomBar.id = buttonValues.path.bottomBar.id;
    navButtonBottomBar.setAttribute('d', buttonValues.path.bottomBar.d);
    navButtonBottomBar.setAttribute('style', buttonValues.path.bottomBar.style);
    navButtonBottomBar.setAttribute('transform', 'rotate(0)')
    
    const navButtonSvgBorderPart = document.createElementNS("http://www.w3.org/2000/svg", "path");
    navButtonSvgBorderPart.id = buttonValues.path.borderPart.id;
    navButtonSvgBorderPart.setAttribute('d', buttonValues.path.borderPart.d);
    navButtonSvgBorderPart.setAttribute('style', buttonValues.path.borderPart.style);
    navButtonSvgBorderPart.setAttribute('transform', 'rotate(0)')
    
    navButtonSvg.appendChild(navButtonTopBar);
    navButtonSvg.appendChild(navButtonMiddleBar);
    navButtonSvg.appendChild(navButtonBottomBar);
    navButtonSvg.appendChild(navButtonSvgBorderPart);

    return navButtonSvg
}