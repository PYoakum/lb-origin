import fetchContent from './fetch-content.js';
import fetchConfig from './fetch-config.js';

export default async function init(){

  fetchConfig(
    (
        configData
    )=>
        fetchContent(
            configData
        )
    )

}

window.addEventListener ?
window.addEventListener("load", init, false) :
window.attachEvent && window.attachEvent("onload", init);