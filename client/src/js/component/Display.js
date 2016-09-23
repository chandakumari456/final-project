var React = require('react');

var Display = React.createClass({
    render:function(){
        var camper = this.props.data;
        return(
            <tr >
                <td>{camper.waveName}</td>
                <td>{camper.waveType}</td>
                <td>{camper.Location}</td>
                <td>{camper.plannedStartDate}</td>
                <td>{camper.plannedEndDate}</td>
                <td>{camper.NumberOfParticipants}</td>
                <td><button id="submit" type="button" className="btn btn-primary">Update</button></td>
            </tr>
        );
    }
});
module.exports=Display
