const { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('IP address XXXXXXXX',(error,geoCoords) => {
//   if (error) {
//     console.log('Cant find the Geo coordinates');
//     return;
//   }
//   console.log(`Your GeoCoordinates are: Latitude: ${geoCoords.latitude} and longitude: ${geoCoords.longitude}`);
// });

// const exampleCoords = { latitude: 'XXXXX', longitude: 'XXXXXXX' };

// fetchISSFlyOverTimes(exampleCoords,(error,issCoords) => {
//   if (error) {
//         console.log('Cant find the Iss coordinates');
//         return;
//       }
//   console.log(`The Iss coordinates are: ${issCoords}`);
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for(let item of passTimes.response) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(item.risetime);
    const duration = item.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
  //console.log(passTimes.response);
});
