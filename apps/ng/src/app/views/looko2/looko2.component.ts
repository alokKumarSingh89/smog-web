import { Component } from '@angular/core';
import { TableData, DataTableService } from './datatable.service';

@Component({
  templateUrl: 'looko2.component.html',
  providers: [ DataTableService ],
})
export class LookO2Component {
  error: any;
  public data: TableData;
  public filterQuery = '';

  constructor(private dataTableService: DataTableService) {
    this.dataTableService.getData()
      .subscribe(
        (data: TableData) => {
          setTimeout(() => {
            this.data = [...data]
          },1000);
        }, // success path
        error => this.error = error // error path
      );
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  public getDate(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: '2-digit'});
  }

  openLookO2(item) {
    console.log(item);
  }
}
