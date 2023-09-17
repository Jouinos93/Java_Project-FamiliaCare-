import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-users-stat',
  templateUrl: './users-stat.component.html',
  styleUrls: ['./users-stat.component.scss']
})
export class UsersStatComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const chartOptions: Highcharts.Options = { // Specify the type
      chart: {
        type: 'line',
        height: 325
      },
      title: {
        text: 'Month wise Requests'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [
        {
          name: 'Tunis',
          type: 'line',
          color: '#044342',
          data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
        },
        {
          name: 'Bizerte',
          type: 'line',
          color: '#7e0505',
          data: [
            47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
          ]
        },
        {
          name: 'Monastir',
          type: 'line',
          color: '#ed9e20',
          data: [
            17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
          ]
        },
      ],
      credits: {
        enabled: false
      }
    };

    Highcharts.chart(this.el.nativeElement.querySelector('.chart-container'), chartOptions);
  }
}

