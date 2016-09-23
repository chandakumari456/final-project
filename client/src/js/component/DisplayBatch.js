var React = require('react');
var Display = require('./Display');

var DisplayBatch = React.createClass({
    render:function(){
        var result = this.props.data.map(function(result,index){
            return <Display key={index} data={ result } />
            });
        return(
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="col-md-2">wave Name</th>
                                <th className="col-md-2">Wave Type</th>
                                <th className="col-md-2">Location</th>
                                <th className="col-md-2">plannedStartDate</th>
                                <th className="col-md-2">plannedEndDatea</th>
                                <th className="col-md-1">No of Participants</th>
                                <th className="col-md-1">Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {result}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});
module.exports=DisplayBatch;
