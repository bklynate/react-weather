var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
    <h3>{temp}&#8457; in {location}</h3>
  );
}

module.exports = WeatherMessage;
