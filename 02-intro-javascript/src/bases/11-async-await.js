

// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve) => {
//         resolve('hhtps://sjkdjsakdsakdsasad.com')
//     })
//     return promesa;
// }
// getImagenPromesa().then( console.log )

const getImagen = async() => {

    try {
        const API_KEY = 'aEkPaJYpsr2FNMcjsHohLcwjpn0ngadk';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const { data } = await peticion.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    



}

getImagen();

