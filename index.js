const participantes = ["Rafael", " Daniel","Manoel "]

function position(competidores){
    let daniel = competidores.indexOf(" Daniel")

    if(daniel == 0  ){
      return "Daniel é o vencedor."
    }else{     
      competidores.splice(daniel - 1,0,competidores[daniel])      
      competidores.splice(daniel +1,1)
      return `${competidores[0]} é o vencedor.  ${competidores.concat(" este é o podio")}`     
    }
  }
  
console.log(position(participantes))
