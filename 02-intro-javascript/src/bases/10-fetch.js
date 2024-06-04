
const API_KEY = 'aEkPaJYpsr2FNMcjsHohLcwjpn0ngadk';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion
.then(response => response.json())
.then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch((error) => {
    console.log(error)
});
