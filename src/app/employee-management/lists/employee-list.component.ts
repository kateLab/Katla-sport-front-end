import { Component, OnInit } from '@angular/core';
import { EmployeeListItem } from '../models/employee-list-item';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeListItem[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(h => this.employees = h);
  }

  onDelete(id: number) {
    var hive = this.employees.find(h => h.id == id);
    this.employeeService.setEmployeeStatus(id, true).subscribe(c => hive.isDeleted = true);
  }

  onRestore(id: number) {
    var hive = this.employees.find(h => h.id == id);
    this.employeeService.setEmployeeStatus(id, false).subscribe(c => hive.isDeleted = false);
  }
}
