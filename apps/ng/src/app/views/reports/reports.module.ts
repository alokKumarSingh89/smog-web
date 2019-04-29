import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {ReportsRoutingModule} from './reports-routing.module';
import {ExcelReportComponent} from './excel-report/excel-report.component';
import {CommonModule} from '@angular/common';
import {CollapseModule} from 'ngx-bootstrap';
import {PapaParseModule} from 'ngx-papaparse';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReportsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    PapaParseModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [ExcelReportComponent]
})
export class ReportsModule {
}
