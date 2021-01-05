import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public selectedId;
  public Departments = [
    { "id": 1, "name": "angular" },
    { "id": 2, "name": "node" },
    { "id": 3, "name": "java" },
    { "id": 4, "name": "spring" },
    { "id": 5, "name": "express" },
    { "id": 6, "name": "react" },
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }
  onSelect(department) {
    //this.router.navigate(['/departments',department.id])
    //RELATIVE ROUTING/

    this.router.navigate([department.id], { relativeTo: this.route })

  }

  isSelected(department) {
    department.id === this.selectedId;
  }



}
