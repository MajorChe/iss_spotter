const request = require('request-promise-native');

const findMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

const findCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://api.freegeoip.app/json/${ip}?apikey=5310c960-3dcf-11ec-ace4-c7c5509d21d8`);
};

const findISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return findMyIP()
    .then(findCoordsByIP)
    .then(findISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };
