const getSleepHours = day => {
  switch(day){
    case 'monday':
      return 5;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 3;
      break;
    case 'saturday':
      return 3;
      break;
    case 'sunday':
      return 3;
      break;
    default:
      return 'This is not a day';
      break;
  }
};
const getActualSleepHours = () => {
 const sleephours = getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')
 return sleephours;
};

const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
}
// console.log(getIdealSleepHours())

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const fSleepHours = idealSleepHours-actualSleepHours;
  if (actualSleepHours === idealSleepHours){
    return `You sleep for ${actualSleepHours} that's enough and reall good.`;
  }
  else if (actualSleepHours < idealSleepHours){
    return `You sleep for ${actualSleepHours} that's not enough`;
  }
  else if (actualSleepHours > idealSleepHours){
    return `You sleep for ${actualSleepHours} that's more than enough`;
  }
  else{
    return 'What is actually wrong with you'
  }
}
console.log(calculateSleepDebt())