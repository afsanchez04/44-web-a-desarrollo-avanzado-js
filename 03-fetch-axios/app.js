
//https://swapi.dev/api/starships/9/

fetch("https://swapi.dev/api/starships/9/")
  .then( res => { 
    console.log( res.ok ) //True o false 
    console.log( res.status ) //200, 404, 500
    if( !res.ok ){
      throw new Error ( `Error HTTP. Status: ${res.status}` )
    }

    return res.json()

  })
  .then( data => {
    console.log(data)
  })
  .catch( error => { console.error( error ) }) 
  .finally( () => { console.log("Esto se ejecuta independientemente de la promesa fetch") } )