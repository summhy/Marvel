
const search = document.querySelector(".search");
const form = document.querySelector(".form");
const content = document.querySelector(".content");


form.addEventListener("submit", event => {
    event.preventDefault();
    const seachTerm = search.value.trim();
    if(!seachTerm){
        alert("Debes indicar valor a buscar");
        return
    }
    searchUser(seachTerm);
    
});

async function searchUser(search){
  
    const request  =  await fetch(`${API}&title=${search}`);
    const response =  await request.json();
    content.innerHTML="";
    console.log(response)
   if (response.data.count){
        for(const heroe of response.data.results){ 
            const img =  document.createElement('img');
            img.src= heroe.thumbnail.path +"."+heroe.thumbnail.extension;
            img.className ="imagenes";
            content.appendChild(img);
        }
    }else{
        const h1 =  document.createElement('h1');
        h1.textContent="Sin información";
        content.appendChild(h1);
    }
} 
