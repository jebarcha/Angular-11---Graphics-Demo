import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraphicsService } from '../../services/graphics.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 150]
  ];
  
  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63'
      ]
    }
  ];
  
  constructor(private graphicsService: GraphicsService) { }

  ngOnInit(): void {
    // this.graphicsService.getSocialNetworkUsers().subscribe(data => {
    //   //console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   //console.log(labels, values);

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);
    // });

    this.graphicsService.getSocialNetworkUsersDonaData()
      .subscribe(({labels, values}) => {

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
        
    })
  }

}
