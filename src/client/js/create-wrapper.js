const mainBody = document.getElementsByTagName("body")[0];

// create main content wrapper
export default function createWrapper(callback){

    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    mainBody.appendChild(wrapper);
    callback(wrapper);
    
}