import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'; // Import Highcharts library
import { Options } from 'highcharts'; // Import the Options type for chart configuration

@Component({
  selector: 'app-sitters-stat',
  templateUrl: './sitters-stat.component.html',
  styleUrls: ['./sitters-stat.component.scss']
})
export class SittersStatComponent {
  chartOptions: Options = {
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Activities Provided By CareGivers'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Chatting',
            y: 41.0,
            color: '#044342',
          },
          {
            name: 'Camping',
            y: 33.8,
            color: '#7e0505',
          },
          {
            name: 'Cooking',
            y: 6.5,
            color: '#ed9e20',
          },
          {
            name: 'Sports',
            y: 15.2,
            color: '#6920fb',
          },
          {
            name: 'Garding',
            y: 3.5,
            color: '#121212',
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
    Highcharts.chart('container', this.chartOptions); // Initialize the chart
  }
}
