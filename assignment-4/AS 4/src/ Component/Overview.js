import React, { Component } from 'react';
import MainContainer from './MainContainer';
import ProjectsPanel from './ProjectsPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';

export default class Overview extends Component {
  render(){
  return(
      <MainContainer>
        <h1 className="page-header">Overview</h1>
        <div className="row">
          <div className="col-md-4">
            <ProjectsPanel />
          </div>
          <div className="col-md-4">
            <TeamsPanel />
          </div>
          <div className="col-md-4">
            <EmployeesPanel />
          </div>
        </div>
        </MainContainer>
    );
  }
}

