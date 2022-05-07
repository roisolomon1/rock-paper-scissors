const player_text = document.getElementById("plyaertext")
const computer_text = document.getElementById("computertext")
const result_text = document.getElementById("resulttext")

const choice_buttons = document.querySelector(".choicebutton")

let player 
let computer
let result




choice_buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        player = button.textContent
        computerturn()
        player_text.textContent = `player: ${player}`
        computer_text.textContent = `computer: ${computer}`
        result_text.textContent = checkwinner()
    })
})
       


function computerturn(){
    const random_number = Math.floor(Math.random()*3)+1

    switch(random_number){
        case 1:
            computer =="ROCK"
            break
        case 2:
            computer =="PAPER"
            break
        case 3:
            computer =="SCISSORS"
            break
    }

}

function checkwinner(){
    if(computer==player){
        return "Draw"
    }
    else if(computer=="ROCK"){
        return(player == "PAPER")? "You Win!" : "You Lose!"
    }
    else if(computer=="PAPER"){
        return(player=="SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer=="SCISSORS"){
        return(player=="ROCK") ? "You Win!" : "You Lose!"
    }
}



