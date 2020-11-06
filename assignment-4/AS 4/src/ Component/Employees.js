import React, {Component} from 'react'
import MainContainer from './MainContainer';
import moment from 'moment';

export default class Employees extends Component{
    
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
            <MainContainer sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td><b>Name & Position</b></td>
                            <td><b>Address</b></td>
                            <td><b>Phone Num</b></td>
                            <td><b>Hire Date</b></td>
                            <td><b>Salary Bonus</b></td>
                        </tr>        
                    </thead>
                    <tbody>
                        {this.state.employees.sort(function (a, b) {
                            return ('' + a._id).localeCompare(b._id);}).map(employees=>{
                                return(
                                    <tr key={employees._id}>                                
                                        <td>{employees.FirstName} {employees.LastName} - {employees.Position.PositionName}</td>
                                        <td>{employees.AddressStreet}. {employees.AddressCity} {employees.AddressState}, {employees.AddressZip}</td>
                                        <td>{employees.PhoneNum} ex: {employees.Extension}</td>
                                        <td>{moment(employees.HireDate).utc().format('LL')}</td>
                                        <td>$ {employees.SalaryBonus}</td>
                                    </tr>             
                                );
                            })
                        } 
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}