import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../services/department.service';
import { Department } from '../models/department';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  department = new Department(0, "", "", false, 0);
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.departmentService.getDepartment(p['id']).subscribe(h => this.department = h);
      this.existed = true;
    });
  }

  navigateToDepartments() {
    this.router.navigate(['/departments']);
  }

  onCancel() {
    this.navigateToDepartments();
  }

  onSubmit() {
    if (this.existed) {
      this.departmentService.updateDepartment(this.department).subscribe(h => this.navigateToDepartments());
    }
    else {
      this.departmentService.addDepartment(this.department).subscribe(h => this.navigateToDepartments());
    }
  }

  onDelete() {
    this.departmentService.setDepartmentStatus(this.department.id, true).subscribe(h => this.department.isDeleted = true);
  }

  onUndelete() {
    this.departmentService.setDepartmentStatus(this.department.id, false).subscribe(h => this.department.isDeleted = false);
  }

  onPurge() {
    this.departmentService.deleteDepartment(this.department.id).subscribe(h => this.navigateToDepartments());
  }
}
