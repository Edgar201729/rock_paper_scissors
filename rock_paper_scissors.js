let choise1 = prompt("Select paper, rock or scissors");
let choise2 = prompt("Select paper, rock or scissors");

function game(choise1, choise2){
  if(choise1 === choise2){
    return "try again"
  }
  if(choise1 === "paper"){
    if(choise2 === "rock"){
      return "paper win"
    } else if(choise2 === "scissors"){
      return "scissors win"
    }
  }
  if(choise1 === "rock"){
    if(choise2 === "paper"){
      return "paper win"
    } else if(choise2 === "scissors"){
      return "rock win"
    }
  }
  if(choise1 === "scissors"){
    if(choise2 === "paper"){
      return "scissors win"
    }else if(choise2 === "rock"){
      return "rock win"
    }
  }
}

console.log(game(choise1, choise2))