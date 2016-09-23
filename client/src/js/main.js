var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory,hashHistory, Route, Router, IndexRoute} = require('react-router');
var Navbar = require('./component/Navbar');
var Home = require('./component/Home');
var CreateBatch = require('./component/CreateBatch');

var RouterBox = React.createClass({
  render: function(){
    return (
      <div>
      <Navbar/>
      {this.props.children}

      </div>
    )
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={RouterBox}>
      <IndexRoute component={Home}/>
      <Route path="/getDetails" component={CreateBatch}/>
  </Route>
  </Router>,document.getElementById('app'));
