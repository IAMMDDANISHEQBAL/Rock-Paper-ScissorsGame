
let total_wins=0;
let total_loss=0;
function playGame(playerMove) {
    const random = Math.random();
    let computerMove = "";
   

    if(random >= 0 && random < 1/3) {
         computerMove = "rock";
    } 
    else if (random >= 1/3 && random < 2/3) {
            computerMove = "paper";
    } else {
             computerMove = "scissors";
    }

    if(playerMove === computerMove) {
         document.querySelector('.consoles').innerHTML=("It's a tie");
         
    } else if((playerMove === "rock" && computerMove === "scissors") || 
    (playerMove === "scissors" && computerMove === "paper") || (playerMove === "paper" && computerMove === "rock")) {
                    document.querySelector('.consoles').innerHTML="You win! The computer chose " + computerMove;
                    total_wins++;
                   
    } else {
            document.querySelector('.consoles').innerHTML ="You lose! The computer chose " + computerMove;
             total_loss++;
            
          }
          document.querySelector('.i').innerHTML = total_wins;
          document.querySelector('.f').innerHTML = total_loss;
          document.querySelector('.move').innerHTML=`<img src="${computerMove}-emoji.png"
          class="move-icon">`
 }
function reset()
{
      total_wins=0;
      total_loss=0;
      document.querySelector('.i').innerHTML =  total_wins;
      document.querySelector('.f').innerHTML = total_loss;
      document.querySelector('.move').innerHTML="";
      document.querySelector('.consoles').innerHTML ="";
}