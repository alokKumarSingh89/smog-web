import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';

import {LookO2Component} from './looko2.component';
import {LookO2RoutingModule} from './looko2-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DataFilterPipe} from './datafilterpipe';
import {DataTableModule} from 'angular2-datatable';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LookO2RoutingModule,
    ChartsModule,
    DataTableModule,
    BsDropdownModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot()
  ],
  declarations: [LookO2Component, DataFilterPipe]
})
export class LookO2Module {
}
