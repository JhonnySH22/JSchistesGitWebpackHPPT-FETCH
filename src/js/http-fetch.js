const jurl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste =async () =>{

 try {
    const resp = await fetch(jurl)
    if(!resp.ok) alert('algo salio mal');
    const {value, id, icon_url} = await resp.json();//esto regresa un chiste {value, id, icon_url}
    return {value, id, icon_url};
    } catch (err) {
        throw err
    }   
}

export{

    obtenerChiste
}