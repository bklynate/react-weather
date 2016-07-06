var React = require('react');

// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//   return(
//     <h3>{temp}&#8457; in {location}</h3>
//   );
// }

var WeatherMessage = ({temp, location}) => {
  return(
    <h3>{temp}&#8457; in {location}</h3>
  );
}

module.exports = WeatherMessage;
