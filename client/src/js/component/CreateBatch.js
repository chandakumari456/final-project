var React = require('react');

var CreateBatch = React.createClass({
  getInitialState:function(){
    return {waveName:'',waveType:'',Location:'',NumberOfParticipants:'',plannedStartDate:'',plannedEndDate:''};

  },
  handleWaveNameChange: function(e) {
    this.setState({waveName: e.target.value});
  },
  handleWaveTypeChange: function(e) {
    this.setState({waveType: e.target.value});
  },
  handleLocationChange: function(e) {
    this.setState({Location: e.target.value});
  },
  handleParticipantsChange: function(e) {
    this.setState({NumberOfParticipants: e.target.value});
  },
  handleStartDateChange: function(e) {
    this.setState({plannedStartDate: e.target.value});
  },
  handleEndDateChange: function(e) {
    this.setState({plannedEndDate: e.target.value});
  },

  sendDataToParent: function() {
    var jsonData = {
    waveName:this.state.waveName,
    waveType:this.state.waveType,
    Location:this.state.Location,
    NumberOfParticipants:this.state.NumberOfParticipants,
    plannedStartDate:this.state.plannedStartDate,
    plannedEndDate:this.state.plannedEndDate
    };
    alert("Created successfully");
    $.ajax({
      url: 'http://localhost:8080/batch/add',
      method:'POST',
      dataType: 'json',
      data:jsonData,
      cache: false,
      success: function(data1) {
        console.log(data1);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
    this.setState({waveName:'',waveType:'',Location:'',NumberOfParticipants:'',plannedStartDate:'',plannedEndDate:''});

   },
   reset:function(){
     this.setState({waveName:'',waveType:'',Location:'',NumberOfParticipants:'',plannedStartDate:'',plannedEndDate:''});
   },
  render: function(){
    return (
      <div id="form">
      <p></p>
      <h3>Create New Batch</h3>
      <p></p>
      <div id = "formBody">
      <p><label for="title">Batch Name &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; :</label>
      <input id="title"  type="text" placeholder="Enter your BatchName" value={this.state.waveName} onChange={this.handleWaveNameChange}/></p>
      <p><label for="type">Batch Type &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;    :</label>
      <input id="type"  type="text" placeholder="Enter your Batch Type" value={this.state.waveType} onChange={this.handleWaveTypeChange}/></p>
      <p><label for="loc">Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
      <input id="loc"  type="text" placeholder="Enter your Location" value={this.state.Location} onChange={this.handleLocationChange}/></p>
      <p><label for="nop">No. of Participants &nbsp; :</label>
      <input id="nop"  type="text" placeholder="Number of Participants" value={this.state.NumberOfParticipants} onChange={this.handleParticipantsChange}/></p>
      <p><label for="pstrtD">Planned Start Date &nbsp;:</label>
      <input id="pstrtD"  type="date" placeholder="Planned Start Date" value={this.state.plannedStartDate} onChange={this.handleStartDateChange}/></p>
      <p><label for="pendD">Planned End Date &nbsp;&nbsp;:</label>
      <input id="pendD"  type="date" placeholder="Planned End Date" value={this.state.plannedEndDate} onChange={this.handleEndDateChange}/></p>
      <button id="submit" type="button" class="btn btn-primary" onClick={this.sendDataToParent}>Submit</button>
      <button id="submit" type="button" class="btn btn-primary" onClick={this.reset}>Reset</button>
      </div>
      </div>
    )
  }
});
module.exports=CreateBatch
