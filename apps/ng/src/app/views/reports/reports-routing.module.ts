import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import {ExcelReportComponent} from './excel-report/excel-report.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'excel',
    pathMatch: 'full',
  },
  {
    path: 'excel',
    component: ExcelReportComponent,
    data: {
      title: 'Excel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
