

const marvel = {
    render:function (){
        const contenedor = document.querySelector("#marvel-row");
       

        fetch(API)
        .then((res) => {return res.json()})
        .then((json) =>{
            for(const heroe of json.data.results){
           
                const img =  document.createElement('img');
                img.src= heroe.thumbnail.path +"."+heroe.thumbnail.extension;
                img.className ="imagenes";
                contenedor.appendChild(img);
            }
           
        })

    }
}
marvel.render();