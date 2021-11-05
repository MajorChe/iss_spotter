const { nextISSTimesForMyLocation} = require('./isspromised');

nextISSTimesForMyLocation()
.then((passTimes) => {
  console.log(passTimes)
})
.catch((error) => {
    console.log("It didn't work: ", error.message);
  });
