import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { ReportsService } from '../services/reports.service';
import { ByMonth } from '../models/by-month';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-per-month',
  templateUrl: './per-month.component.html',
  styleUrls: ['./per-month.component.css']
})
export class PerMonthComponent implements OnInit {

  

  series: ApexAxisChartSeries;
  chart: ApexChart;
  title:ApexTitleSubtitle;
  xaxis: ApexXAxis;

  labels: Array<string> = [];
  data: Array<number> = [];
  
  public validYears: Array<number> = [];
  public chartForm: FormGroup;
  public selectedYear: number;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getValidYears().subscribe(data => 
      {
        this.validYears = data; 
        this.selectedYear = this.validYears[this.validYears.length -1];
        this.initializeChartData(this.selectedYear);
      });
    this.chartForm = new FormGroup({
      selectedYear: new FormControl(this.selectedYear),
    })
  }

  public updateChart():void {
    this.initializeChartData(this.selectedYear);
    console.log('opa')
  }

  private initializeChartData(year:number):void{
    this.reportsService.getStudiesByMonthOfYear(year).subscribe((data) => {
      this.labels = [];
      this.data = [];

      for (let i = 0; i < data.studiesByMonth.length; i++) {
        this.labels.push(data.studiesByMonth[i].month);
        this.data.push(data.studiesByMonth[i].studies)
      }
      
      this.initializeChartOptions();
    });
  }

  private initializeChartOptions(): void {
    this.title = {
      text: 'Estudios iniciados por mes del año ' + this.selectedYear
    };

    this.series = [{
      name: 'Estudios',
      data: this.data
    }];

    this.chart = {
      type: 'bar',
      height: 350,

    }
    this.xaxis= {
      categories: this.labels
    }

  }

}
