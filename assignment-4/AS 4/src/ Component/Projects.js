import React, {Component} from 'react'
import MainContainer from './MainContainer';
import moment from 'moment';

export default class Projects extends Component{
    
    constructor(props){
        super(props);
        this.state={
            projects:[]
        };
    }

    componentDidMount(){
        fetch('https://murmuring-tor-86528.herokuapp.com/projects')
        .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
        .then(data=>{
            this.setState({
                projects: data
            })
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <MainContainer sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td><b>Name</b></td>
                            <td><b>Description</b></td>
                            <td><b>Start Date</b></td>
                            <td><b>End Date</b></td>
                        </tr>        
                    </thead>
                    <tbody>
                        {this.state.projects.sort(function (a, b) {
                            return ('' + a._id).localeCompare(b._id);}).map(projects=>{
                            let projectEndDate = projects.ProjectEndDate ? projects.ProjectEndDate : "n/a";
                                return(
                                    <tr key={projects._id}>
                                        <td>{projects.ProjectName}</td>
                                        <td>{projects.ProjectDescription}</td>
                                        <td>{moment(projects.ProjectStartDate).utc().format('LL')}</td>
                                        <td>{projectEndDate}</td>
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