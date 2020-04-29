import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Info1ListComponent } from './info1-list/info1-list.component'
import { SummaryListComponent } from './summary-list/summary-list.component';
import { SummaryList1Component } from './summary-list1/summary-list1.component';
import { ChartCountriesComponent} from './chart-countries/chart-countries.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  
  {path:'',redirectTo: 'Summary', pathMatch: 'prefix'},
  //{path:'info1', component:Info1ListComponent},
  {path:'Summary', component:SummaryListComponent},
  {path:'Summary1', component:SummaryList1Component},
  {path:'testgrafic', component:ChartCountriesComponent}
  //,{path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent, 
                                EmployeeListComponent, 
                                Info1ListComponent, 
                                SummaryListComponent,
                              PageNotFoundComponent]
