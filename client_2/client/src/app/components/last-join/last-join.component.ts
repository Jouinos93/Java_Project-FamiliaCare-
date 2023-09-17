import { Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'; // Import Highcharts library
import { Options } from 'highcharts';


@Component({
  selector: 'app-last-join',
  templateUrl: './last-join.component.html',
  styleUrls: ['./last-join.component.scss']
})
export class LastJoinComponent implements OnInit{
  chartOptions2: Options = {
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top sections count by Month'
    },
    xAxis: {
      categories: [
        'Care Givers',
        'Care Seekers',
        'Subscriptions'
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        type: 'bar',
        showInLegend:false,
        data: [
          {
            name: 'Care Givers',
            y: 41.0,
            color: '#044342',
          },
          {
            name: 'Care Seekers',
            y: 33.8,
            color: '#7e0505',
          },
          {
            name: 'Subscriptions',
            y: 6.5,
            color: '#ed9e20',
          },
        ]
      }
    ],
    credits: {
      enabled: false
    }
  };

  constructor() {}

  ngOnInit(): void {
    Highcharts.chart('container2', this.chartOptions2); // Initialize the chart
  }
}
