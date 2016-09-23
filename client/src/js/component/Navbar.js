var React = require("react");
var NavLink = require("./NavLink");


var Navbar = React.createClass({
render:function(){
  return(
    <div className ="navbar">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/"><strong>Stack Route</strong></a>
          </div>
          <ul className="nav navbar-nav">
            <li><NavLink to="/getDetails">New Batch</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

});
module.exports=Navbar;
