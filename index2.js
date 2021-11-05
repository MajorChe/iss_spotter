const { nextISSTimesForMyLocation} = require('./isspromised');

nextISSTimesForMyLocation()
.then((passTimes) => {
  console.log(passTimes)
})
