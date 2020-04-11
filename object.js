const team = {
  _players: [
    {
      firstName: 'Chris',
      lastName: 'David',
      age: 20
    },
    {
      firstName: 'Tunts',
      lastName: 'Man',
      age: 20
    },
    {
      firstName: 'Harrison',
      lastName: 'Kpalibo',
      age: 20
    },
  ],
  _games:[
    {
      opponent: 'Eyimba',
      teamPoints: 34,
      opponentPoints: 21,
    },
    {
      opponent: 'Rangers',
      teamPoints: 50,
      opponentPoints: 23,
    },
    {
      opponent: 'Sharks',
      teamPoints: 70,
      opponentPoints: 21,
    },
  ],
  get games(){
    return this._games;
  },
   get players(){
    return this._players;
  },
  addPlayer(firstName, lastName, age){
    let player ={
       firstName,
       lastName,
       age,
    };
    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};
team.addGame('Titans', 100, 98);
team.addPlayer('Steph', 'Curry', 28);
const {_players} = team;
console.log(_players)
