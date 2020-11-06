import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  getEmployeesSub;  
  loadingError: boolean = false;
  filteredEmployees: Employee[]

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees()
    .subscribe(data => {
      this.employees = data;
      this.filteredEmployees = data;
    },
      function(err) { this.loadingError = true; }
    );
  }

  routeEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUP(event:any) {
    let substring: string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((employee) => 
    ((employee.FirstName.toLowerCase().indexOf(substring) != -1) || 
    (employee.LastName.toLowerCase().indexOf(substring) != -1) ||
    (employee.Position["PositionName"].toLowerCase().indexOf(substring) != -1)))
  }

  ngOnDestroy() {
    if(this.getEmployeesSub != 'undefined'){
      this.getEmployeesSub.unsubscribe();
    }
  }
}
