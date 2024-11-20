// create text section
export default function createTextSection(contentSection, section){

    if(section.title){

        let contentTitle = document.createElement('h3');
        contentTitle.innerText = section.title;

        let sectionId = String(section.title).toLowerCase().replace(/[^a-zA-Z0-9-_]/g, '-');
        contentTitle.id = sectionId;

        contentSection.append(contentTitle);

        let contentText = document.createElement('p');
        contentText.innerText = section.content;
        contentSection.append(contentText);  

    } else if(!section.title){

        let contentText = document.createElement('p');
        contentText.innerText = section.content;
        contentSection.append(contentText);  

    }
    
}