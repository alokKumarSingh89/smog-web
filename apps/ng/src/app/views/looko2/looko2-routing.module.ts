import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { LookO2Component } from './looko2.component';

const routes: Routes = [
  {
    path: '',
    component: LookO2Component,
    data: {
      title: 'LookO2'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookO2RoutingModule {}
