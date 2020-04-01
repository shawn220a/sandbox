let geo = function (address) {
  let locale = {}

  let queryURL = `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=3cca82ed19694ee4be80b7b5ffa9b7a6`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    locale.lat = response.data.results[0].bounds.northeast.lat;
    locale.lng = response.data.results[0].bounds.northeast.lng;

    return locale
  })
};

module.exports = geo;