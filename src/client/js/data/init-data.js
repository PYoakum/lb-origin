const initEndpoint = './api/hello';

const config = {
    Headers : {
        'x-header' : 'test' 
    }
}

export default async function initData( callback ){

    fetch(

        initEndpoint, 
        config

    ).then(

        data=>{

            callback(data)

        }
    
    )

}