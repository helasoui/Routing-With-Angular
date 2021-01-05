import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /*this is how to get parameter from a route using snapshot and paramMap.get
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;*/
    //this using paramMap Observable:
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })
  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId])

  }
  goToDepartments(){
    let selectedId= this.departmentId ? this.departmentId:null;
    //this.router.navigate(['/departments',{id:selectedId}]);
    //relative routing:
    this.router.navigate(['../',{id:selectedId}],{relativeTo: this.route})
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route})
  }

}
