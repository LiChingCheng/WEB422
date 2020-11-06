import React, {Component} from 'react'
import MainContainer from './MainContainer';

export default class Teams extends Component{
    constructor(props){
        super(props);
        this.state={
            teams:[]
        };
    }

    componentDidMount(){
        fetch('https://murmuring-tor-86528.herokuapp.com/teams')
        .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
        .then(data=>{
            this.setState({
                teams: data
            })
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td><b>Name</b></td>
                            <td><b>Projects</b></td>
                            <td><b>Employees</b></td>
                            <td><b>TeamLead</b></td>
                        </tr>        
                    </thead>
                    <tbody>
                        {this.state.teams.sort(function (a, b) {
                            return ('' + a._id).localeCompare(b._id);}).map(teams=>{
                                return(
                                    <tr key={teams._id}>
                                        <td>{teams.TeamName}</td>
                                        <td>
                                            {teams.Projects.map(projects=>{
                                                return(
                                                    <li key={projects._id}>{projects.ProjectName}</li>
                                                )
                                            })}</td>
                                        <td>{teams.Employees.length} Employees</td>
                                        <td>{teams.TeamLead.FirstName} {teams.TeamLead.LastName}</td>
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