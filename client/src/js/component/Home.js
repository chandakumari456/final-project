var React = require('react');
var DisplayBatch = require('./DisplayBatch');
var $= require('jquery');

var Home = React.createClass({
  getInitialState:function(){
    return {alldata:[]};
  },
  render:function(){
    return(
    <div>
      <h2>All Batch Details :</h2>
      <DisplayBatch data={this.state.alldata}/>
    </div>
  );
  },
  componentDidMount:function(){
    this.fetchData();
  },
  fetchData: function(){
    $.ajax({
      url: 'http://localhost:8080/batch/getDetails',
      method:'GET',
      dataType: 'json',
      async:false,
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({alldata:data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  }
});
module.exports = Home;
