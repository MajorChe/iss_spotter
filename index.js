const { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('99.236.76.53',(error,geoCoords) => {
//   if (error) {
//     console.log('Cant find the Geo coordinates');
//     return;
//   }
//   console.log(`Your GeoCoordinates are: Latitude: ${geoCoords.latitude} and longitude: ${geoCoords.longitude}`);
// });

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords,(error,issCoords) => {
  if (error) {
        console.log('Cant find the Iss coordinates');
        return;
      }
  console.log(`The Iss coordinates are: ${issCoords}`);
});
