import createWrapper from './create-wrapper.js';
import createContentArticle from './create-content-article.js';
import createContentSection from './create-content-section.js';

export default function createMainView ( content ) {

    createWrapper( ( wrapper ) => {

        for(let j = 0; ( j <= content.articles.length - 1 ); j++ ){

            createContentArticle( wrapper, content.articles[j], j, ( article ) => {

                for(let i = 0; ( i <= content.articles[j].sections.length - 1 ); i++ ){

                    createContentSection( article, content.articles[j].sections[i], i )
    
                }

            })
            
        }    
        
    })
    
}