let variable

const promesa = new Promise((resolve)=> {  
    setTimeout(function(){
    variable = 5+2
    console.log("dentro de la promesa " + variable+ "\n")
    resolve(variable)
},1500)})


console.log(variable)

promesa
.then((resultado)=>{variable = resultado})

