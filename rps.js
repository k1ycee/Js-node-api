const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    // console.log(userInput);
    return userInput;
  }
  else{
    console.log('Make a valid Decision')
  }
}


const getComputerChoice = () => {
  const cmChoice = Math.floor(Math.random()*3);
  // console.log(cmChoice);
  switch (cmChoice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'This should never happen';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'tie';
  }
  else if (userChoice === 'rock' && computerChoice === 'scissors'){
    return "You win";
  }
  else if (userChoice === 'paper' && computerChoice === 'scissors'){
    return "You loose";
  }
  else if (userChoice === 'rock' && computerChoice === 'paper'){
    return "You lose";
  }
  else if (userChoice === 'scissors' && computerChoice === 'rock'){
    return "You lose";
  }
   else if (userChoice === 'paper' && computerChoice === 'rock'){
    return "You win";
  }
   else if (userChoice === 'scissors' && computerChoice === 'paper'){
    return "You win";
  }
  else{
    return "Make a valid decision"
  }

};
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  // console.log(computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
};
// console.log(getComputerChoice())
playGame();

