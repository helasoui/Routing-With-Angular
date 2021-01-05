import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentContactComponent } from "./components/department-contact/department-contact.component";
import { DepartmentDetailsComponent } from "./components/department-details/department-details.component";
import { DepartmentOverviewComponent } from "./components/department-overview/department-overview.component";
import { DepartmentComponent } from "./components/department/department.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
    { path: '', redirectTo: '/departments', pathMatch: 'full' },
    { path: 'departments', component: DepartmentComponent },
    {
        path: 'departments/:id', component: DepartmentDetailsComponent,
        children: [
            { path: 'overview', component: DepartmentOverviewComponent },
            { path: 'contact', component: DepartmentContactComponent }]
    },
    { path: 'employees', component: EmployeeComponent },
    { path: '**', component: PageNotFoundComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [DepartmentComponent,
    EmployeeComponent, DepartmentDetailsComponent, DepartmentContactComponent, PageNotFoundComponent
    , DepartmentOverviewComponent]