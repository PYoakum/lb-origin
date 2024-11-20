// create content section
export default function createFooter(footer){

    const wrapper = document.getElementById('wrapper');
    // create section
    const wrapperFooter = document.createElement('footer');
    wrapperFooter.id = 'wrapper-footer';

    const footerTagline = document.createElement('span');
    footerTagline.innerText = footer.tagline;
    wrapperFooter.append(footerTagline);

    const footerList = document.createElement('ul');
    wrapperFooter.append(footerList)

    for(let i = 0; i <= (footer.links.length - 1) ; i++){

        if(footer.links[i].type == 'link'){

            let footerListItem = document.createElement('li');
            let footerLink = document.createElement('a');

            footerLink.innerText = footer.links[i].label;
            footerLink.href = footer.links[i].content;

            footerListItem.append(footerLink);
            footerList.append(footerListItem);

        };

    };

    wrapper.append(wrapperFooter);
    
}