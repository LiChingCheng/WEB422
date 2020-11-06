import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class EmployeesPanel extends Component {

    constructor(props){
        super(props);
        this.state={
            employees:[]
        };
    }

    componentDidMount(){
        fetch('https://murmuring-tor-86528.herokuapp.com/employees')
        .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
        .then(data=>{
            this.setState({
                employees: data
            })
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Employees</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <tbody>
                        {this.state.employees.sort(function (a, b) {
                            return ('' + a._id).localeCompare(b._id);}).map(employees=>{
                                return(
                                    <tr key={employees._id}>
                                        <td>{employees.FirstName} {employees.LastName}</td>
                                        <td>{employees.Position.PositionName}</td>
                                    </tr>
                                );
                            })
                        } 
                        </tbody>
                    </table>
                    </div>
                    <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                </div>
            </div>
        )
    }
}