const R = require('ramda')

//remove rollNo
//var student = {name : "David Rayy", sclass : "VI", rollno : 12 }
const removeRollNo = inObj => R.omit('rollno', inObj)
//console.log(removeRollNo(student))


//return first 3
//const teams = [{id: 1, name: "Braves", league: "NL"}, {id: 1, name: "Yankees", league: "AL"}, {id: 1, name: "Red Sox", league: "AL"}, {id: 1, name: "Mariners", league: "AL"}, {id: 1, name: "Mets", league: "NL"}, {id: 1, name: "Cubs", league: "NL"}]
const returnFirstThree = inArr => R.take(3, inArr)
//console.log(returnFirstThree(teams))

//filter by teams
//const teams = [{id: 1, name: "Braves", league: "NL"}, {id: 1, name: "Yankees", league: "AL"}, {id: 1, name: "Red Sox", league: "AL"}, {id: 1, name: "Mariners", league: "AL"}, {id: 1, name: "Mets", league: "NL"}, {id: 1, name: "Cubs", league: "NL"}]
const isleague = league => inObj => league===inObj.league
const filterByleague = league => inArr => inArr.filter(x => isleague(league)(x))
//console.log(filterByleague('AL')(teams))


//invert obj
//const myDood = {firstName: "Bob", lastName: "Marley", age: 45, middleName: "Nesta", favoriteMusic: "Reggae", isRasta: true}
const invertKeys = inObj => R.invertObj(inObj)
//console.log(invertKeys(myDood))
