const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json',(error,response,body) => {
    if (error) {
      callback(error,null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const result = JSON.parse(body);
      callback(null,result.ip);
    }
  });
};

const fetchCoordsByIP = (ip,callback) => {
  request(`https://api.freegeoip.app/json/${ip}?apikey=5310c960-3dcf-11ec-ace4-c7c5509d21d8`,(error,response,data) => {
    if (error) {
      callback(error,null);
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching GeoAddress. Response: ${data}`;
      callback(Error(msg), null);
      return;
    } else {
      const result = JSON.parse(data);
      callback(null,result);
    }
  });
};

module.exports = { fetchMyIP,fetchCoordsByIP };