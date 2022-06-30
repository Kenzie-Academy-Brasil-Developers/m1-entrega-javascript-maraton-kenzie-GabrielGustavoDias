const competidores = ["Rafael", " Manoel"," Daniel"]

function position(competidores){
    let daniel = competidores.indexOf(" Daniel")
    if(daniel == 0){
      competidores.copyWithin(0,daniel,daniel -1)
      return `Daniel é o vencedor.  ${competidores.concat(" este é o podio")}`
    }else{
      return `${competidores[0]} é o vencedor.  ${competidores.concat(" este é o podio")}`     
    }
  }
  

console.log(position(competidores))