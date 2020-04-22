import { Component, OnInit } from '@angular/core';
import { DepartmentListItem } from '../models/department-list-item';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './childDepartment-list.component.html',
  styleUrls: ['./childDepartment-list.component.css']
})
export class ChildDepartmentListComponent implements OnInit {

  parentId : number;
  departments: Array<DepartmentListItem>;

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.parentId = p['departmentId'];
      this.departmentService.getChildDepartment(this.parentId).subscribe(s => this.departments = s);
    })
  }

  onDelete(departmentId: number) {
    var department = this.departments.find(h => h.id == departmentId);
    this.departmentService.setDepartmentStatus(departmentId, true).subscribe(c => department.isDeleted = true);
  }

  onRestore(departmentId: number) {
    var department = this.departments.find(h => h.id == departmentId);
    this.departmentService.setDepartmentStatus(departmentId, false).subscribe(c => department.isDeleted = false);
  }

  navigateToDepartments() {
    this.router.navigate(['/departments']);
  }

  onCancel() {
    this.navigateToDepartments();
  }
}
