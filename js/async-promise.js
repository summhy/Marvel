const curso = {
    "nombre":"JS Vespertino",
    "estudiantes":[{"nombre":"Pedro"},
                    {"nombre":"Juan"},
                    {"nombre":"Diego"},
                ]
    }
console.log("-------GET CURSO 1 ------");
function getCurso1(){
    console.log("datos 1")
    return(curso);
}
console.log(getCurso1());

console.log("-------GET CURSO 2 ------");
function getCurso2(){
    setTimeout(()=>{
        console.log("datos 2")
        return(curso);
     },1500);
}
console.log(getCurso2());


console.log("-------GET CURSO 3 ------");
function getCurso3(){
    const error = Math.random()
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error < 0.5){
                resolve(curso);
            }else{
                reject("Error al cargar");
            }
            
         },1500);
      
    })
}
getCurso3()
    .then((datos)=> {console.log("datos 3")
                     console.log(datos)})
    .catch((err)=> {console.log("error 3")
                    console.log(err)});


console.log("-------GET CURSO 4 ------");
function getCurso4(){
    setTimeout(()=>{
       return(curso);
    },1000);
}

async function obtenerCurso(){
    try{
        const datos= await getCurso4();
        console.log("datos 4")
        console.log(datos)
    }catch(err){
        console.log("error 4")
        console.log(err);
    }
    
}
obtenerCurso()
