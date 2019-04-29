import {Component, OnInit} from '@angular/core';
import {Papa} from 'ngx-papaparse';
import * as moment from 'moment';
import {AirQualityValue, analysePeriod, getOverallIJP} from '../../../shared/utils/standards';

@Component({
  templateUrl: 'excel-report.component.html'
})
export class ExcelReportComponent implements OnInit {
  csvData = '';

  constructor(private papa: Papa) {
  }

  ngOnInit(): void {
  }

  parseData() {
    const data = this.csvData.replace(/,/g, '.');
    this.papa.parse(data, {
      delimiter: '\t',
      skipEmptyLines: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        // result.data.forEach(res => {
        //   const value: AirQualityValue = res;
        //   value.date = moment(value.date, 'DD.MM.YYYY').toDate();
        //   console.log(value);
        //   console.log(getOverallIJP(value));
        // });
        analysePeriod(result.data);
        console.log('Parsed: ', result);
      }
    });
  }
}
