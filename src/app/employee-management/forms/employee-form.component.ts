import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee = new Employee(0, "", "", "", 0, false);
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.employeeService.getEmployee(p['id']).subscribe(h => this.employee = h);
      this.existed = true;
    });
  }

  navigateToEmployees() {
    this.router.navigate(['/employees']);
  }

  onCancel() {
    this.navigateToEmployees();
  }

  onSubmit() {
    if (this.existed) {
      this.employeeService.updateEmployee(this.employee).subscribe(h => this.navigateToEmployees());
    }
    else {
      this.employeeService.addEmployee(this.employee).subscribe(h => this.navigateToEmployees());
    }
  }

  onDelete() {
    this.employeeService.setEmployeeStatus(this.employee.id, true).subscribe(h => this.employee.isDeleted = true);
  }

  onUndelete() {
    this.employeeService.setEmployeeStatus(this.employee.id, false).subscribe(h => this.employee.isDeleted = false);
  }

  onPurge() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(h => this.navigateToEmployees());
  }
}
