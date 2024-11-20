import createTextSection from './create-text-section.js';
import createImageSection from './create-image-section.js';

// create content section
export default function createContentSection(article, section, index){

    // create section
    const contentSection = document.createElement('div');
    contentSection.id = 'wrapper-section-'+index;
    contentSection.classList.add('content-section');

    switch (section.type){

        // text section
        case 'text':
            createTextSection(contentSection, section);
            article.append(contentSection);
            break;
        // image section
        case 'image':
            createImageSection(contentSection, section);
            article.append(contentSection);
            break;
        default:
            console.log(`default, ${section.type}`)
            break;

    };

}