import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthInsurance } from '../models/health-insurance';
import { HealthInsuranceService } from '../services/health-insurance.service';

@Component({
  selector: 'app-health-insurance-edit',
  templateUrl: './health-insurance-edit.component.html',
  styleUrls: ['./health-insurance-edit.component.scss']
})
export class HealthInsuranceEditComponent implements OnInit {

  public selectedHealthInsurance: HealthInsurance = new HealthInsurance();
  loading = false;
  
  constructor(private healthInsuranceService:HealthInsuranceService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHealthInsurance();
  }

  private getHealthInsurance():void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.healthInsuranceService.get(id).subscribe((data) => this.selectedHealthInsurance = data);
    }
  }

  updateHealthInsurance() {
    if (this.selectedHealthInsurance.id !== undefined) {
      this.healthInsuranceService.update(this.selectedHealthInsurance).subscribe((data) => console.log("success"));
    } else {
      this.healthInsuranceService.create(this.selectedHealthInsurance).subscribe((data) => console.log("success"));
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
