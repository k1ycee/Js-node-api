let userName = '';

userName === '' ? console.log('Hello, Stranger') :  console.log(`Hello, ${userName}`)


let userQuestion = 'When do i get married?\n';

console.log(`You asked ${userQuestion}`)

const randomNumber = Math.floor(Math.random() * 8)
let eightBall = '';

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    console.log(eightBall)
    break;
  case 1:
    eightBall = 'It is certain';
    console.log(eightBall)
    break;
  case 2:
    eightBall = 'It is certain';
    console.log(eightBall)
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    console.log(eightBall)
    break;
  case 4:
    eightBall = 'Do not count on it';
    console.log(eightBall)
    break;
  case 5:
    eightBall = 'My sources say no';
    console.log(eightBall)
    break; 
  case 6:
    eightBall = 'Outlook not so good';
    console.log(eightBall)
    break;
  case 7:
    eightBall = 'Signs point to yes';
    console.log(eightBall)
    break;
  default:
    console.log('I don\'t see any projections')
    break;
}