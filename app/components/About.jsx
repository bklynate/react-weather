var React = require('react');

var About = (props) => {
  return(
    <div className="text-center">
      <h1>About</h1>
      <p>This is a simple weather application made using ReactJs and Foundation for the frontend and NodeJs with ExpressJs for the backend. It uses OpenWeatherMapAPI to source its weather information.</p>

      <p><a target="_blank" href="https://github.com/bklynate/react-weather">Github</a></p>
   </div>
  );
}

module.exports = About;
