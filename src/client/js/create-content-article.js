// create content section
export default function createContentArticle(wrapper, article, index, callback){

    // create section
    const contentArticle = document.createElement('article');
    contentArticle.id = 'wrapper-article-'+index;
    contentArticle.classList.add('content-article');

    // article title
    const articleTitle = document.createElement('h1');
    let articleId = String(article.title).toLowerCase().replace(/[^a-zA-Z0-9-_]/g, '-');
    articleTitle.id = articleId;
    articleTitle.innerText = article.title;
    contentArticle.append(articleTitle);

    // article date time
    let dateTitle = document.createElement('h2');
    dateTitle.innerText = article.datetime;
    contentArticle.append(dateTitle);

    wrapper.append(contentArticle);

    callback(contentArticle)

}