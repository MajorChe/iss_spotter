const { fetchMyIP,fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('99.236.76.53',(error,geoCoords) => {
  if (error) {
    console.log('Cant find the Geo coordinates');
    return;
  }
  console.log(`Your GeoCoordinates are: Latitude: ${geoCoords.latitude} and longitude: ${geoCoords.longitude}`);
});
