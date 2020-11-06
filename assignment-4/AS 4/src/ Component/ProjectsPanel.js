import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

export default class ProjectsPanel extends Component {

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
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <tbody>
                        {this.state.projects.sort(function (a, b) {
                            return ('' + a._id).localeCompare(b._id);}).map(projects => {
                                let activeDay = moment().diff(projects.ProjectStartDate,'day');
                                return(
                                    <tr key={projects._id}>
                                        <td>{projects.ProjectName}</td>
                                        <td>Active {activeDay} Days</td>
                                    </tr> 
                                );
                            })
                        }
                        </tbody>
                    </table>
                    </div>
                <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        )
    }
}