const manifestUrl = 'https://prototype-config.peteryoakum.workers.dev/api/config'


export default async function fetchConfig(configData){

  await fetch(
    manifestUrl, {
      method: 'GET', 
      mode: 'cors', 
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'
        
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
  }).then(
    response => response.json()
  ).then(
    data => {

    configData(data.config);

  });
}