const API_URL = "https://animal-api-two.vercel.app/koala";

const $content = document.querySelector('div.content');
const getData = async () => {
    let res = await fetch(API_URL);
    try{
        if(res){
            let data = await res.json();
            $content.innerHTML = data.photos.reduce((p,i) =>{
                return p += `<img src=${i.url}></img>`;
            }, "");
        }
    } catch(err){
        console.log(err);
    }
}

getData();