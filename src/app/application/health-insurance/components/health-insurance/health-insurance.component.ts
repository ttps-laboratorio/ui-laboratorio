import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HealthInsurance } from '../../models/health-insurance';
import { HealthInsuranceService } from '../../services/health-insurance.service';

@Component({
  selector: 'app-health-insurance',
  templateUrl: './health-insurance.component.html',
  styleUrls: ['./health-insurance.component.scss']
})
export class HealthInsuranceComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'edit'];
  dataSource = new MatTableDataSource<HealthInsurance>();

  selectedHealthInsurance: HealthInsurance = new HealthInsurance();
  loading = false;

  constructor(public healthInsuranceService: HealthInsuranceService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.healthInsuranceService.getAll().subscribe((data) => this.dataSource.data=data);
    this.loading = false;
  }

  updateHealthInsurance() {
    if (this.selectedHealthInsurance.id !== undefined) {
      this.healthInsuranceService.update(this.selectedHealthInsurance).subscribe((data) => this.refresh());
    } else {
      this.healthInsuranceService.create(this.selectedHealthInsurance).subscribe((data) => this.refresh());
    }
    this.selectedHealthInsurance = new HealthInsurance();
  }

  editHealthInsurance(healthInsurance: HealthInsurance) {
    this.selectedHealthInsurance = healthInsurance;
  }

  clearHealthInsurance() {
    this.selectedHealthInsurance = new HealthInsurance();
  }

}
