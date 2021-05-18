import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styles: [
  ]
})
export class GraphicBarComponent implements OnInit {
  @Input() horizontal:boolean = false;

  
  @Input() barChartLabels: Label[] = [
    //'2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  
  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
    // { data: [8, 38, 70, 59, 66, 80, 100], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red'  }
  ];
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  
  constructor() { 
  }

  ngOnInit(): void {
    this.barChartType = this.horizontal ? 'horizontalBar' : 'bar';
  }


}
