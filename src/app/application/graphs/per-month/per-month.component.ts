import { Component, ViewChild } from '@angular/core';
import { GraphService } from '../services/graphs.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-per-month',
  templateUrl: './per-month.component.html',
  styleUrls: ['./per-month.component.css']
})
export class PerMonthComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private graphService: GraphService) {}


  public dict = this.getStudiesPerMonth();
  
  public barChartData: ChartData<'bar'> = {
    labels: Object.keys(this.dict),
    datasets: [
      { data: Object.values(this.dict), label: 'Cantidad de estudios' },
    ]
  };

  private getStudiesPerMonth() {
    // this.graphService.getStudiesByMonthOfYear(2021).subscribe(res => 
    //   {
    //     var dic = Object.assign({}, ...res['studiesByMonth'].map((x: { month: string; studies: number; }) => ({[x.month]: x.studies})));
    //     this.labels = Object.keys(dic);
    //     this.values = Object.values(dic);
    //   });
    var studies = this.graphService.getStudiesByMonthOfYear(2021);
    return studies['studiesByMonth'];
  }
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartPlugins = [];
  public barChartType: ChartType = 'bar';

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // public data;
  // public labels: Array<string>;
  // public values: Array<number>;
  

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };

  // barChartLabels: Label[]; 
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // barChartData: ChartDataSets[]; 
  
  // 

  // ngOnInit() {
  //   this.getStudiesPerMonth();
  //   this.graphService.getStudiesByMonthOfYear(2021).subscribe(res => 
  //   {
  //     var dic = Object.assign({}, ...res['studiesByMonth'].map((x) => ({[x.month]: x.studies})));
  //     // this.labels = Object.keys(dic);
  //     this.barChartLabels = Object.keys(dic);
  //     // this.values = Object.values(dic);
  //     this.barChartData = [
  //       { data: 
  //         Object.keys(dic)
  //         .map(function(key) {
  //             return dic[key];
  //         })
  //         , label:'Cantidad de estudios'}
  //     ];
  //   })
  // }

  
}
