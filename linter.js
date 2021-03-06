let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(storyWords.length)

const betterWords = storyWords.filter(bera => {
  // if (bera !== 'extremely' || bera !== 'literally' || bera !== 'actually'){
  //   console.log(bera)
  return !unnecessaryWords.includes(bera);
  }
);

const countOf = betterWords.filter(notsoused => {
  return !overusedWords.includes(notsoused);
});

console.log(countOf);

let count = 0;
let scount = 0;
let tcount = 0;

countOf.forEach(werd =>{
  if (werd === 'really'){
    return count++;
  }
  else if(werd === 'very'){
    return scount++;
  }
  else if (werd === 'basically'){
    return tcount++;
  }
 }
)


// console.log(overusedWords[0] +' appears '+ count+' times.');
// console.log(overusedWords[1] +' appears '+ scount+' times.');
// console.log(overusedWords[2] +' appears '+ tcount+' times.');

let counter = 0;
const countSentence = betterWords.filter(element =>{
  if(element.indexOf('.') !== -1 || element.indexOf('!') !== -1){
    return counter++;
  }
});
console.log('This text has ' + countSentence.length + ' sentences');

//7. Log betterWords as a single string
console.log(betterWords.join(' '));