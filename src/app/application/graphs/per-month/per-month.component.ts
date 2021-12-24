import { Component, ViewChild, OnInit} from '@angular/core';
import { GraphService } from '../services/graphs.service';
import { ChartDataSet, ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';
import { StudiesPerMonth } from '../models/studies-per-month';

@Component({
  selector: 'app-per-month',
  templateUrl: './per-month.component.html',
  styleUrls: ['./per-month.component.css']
})
export class PerMonthComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public data: StudiesPerMonth;

  public chartData: ChartDataSet[] = [
    {data: [], label: 'Data1', backgroundColor: '#8B5E83', borderRadius: 20}
  ]
  public labels: string[];
  public options: ChartOptions = {
    scales: {
      x:{
        grid:{
          color:'#D6B0B1'
        },
        ticks: {
          color:'#D6B0B1'
        }
      },
      y:{
        beginAtZero: true,
        grid:{
          color:'#D6B0B1'
        },
        ticks: {
          color:'#D6B0B1'
        }
      }
    }
  };

  constructor(private graphService: GraphService) {}
  
  ngOnInit(): void {
    this.graphService.getStudiesByMonthOfYear(2021).subscribe((data) => {
      this.labels = Object.keys(data);
      this.chartData[0].data = Object.values(data);
      this.chart.update()
    });
  }
}
