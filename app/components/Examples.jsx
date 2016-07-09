var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="page-title text-center">Examples</h1>
      <p>Here are a couple locations to try out: </p>
      <ol>
        <li>
          <Link to='/?location=Brooklyn'>Brooklyn, NY</Link>
        </li>
        <li>
          <Link to='/?location=Dallas'>Dallas, TX</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
