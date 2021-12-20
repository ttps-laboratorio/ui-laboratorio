import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/pages/auth/models';
import { AuthService } from 'src/app/pages/auth/services';
import { Study } from '../models/study';
import { StudyService } from '../services/study.service';

@Component({
  selector: 'app-study-details',
  templateUrl: './study-details.component.html',
  styleUrls: ['./study-details.component.scss']
})
export class StudyDetailsComponent implements OnInit {

  public study: Study = new Study();
  public user:User = this.authService.user;

  constructor(private router: Router, private studyService: StudyService, private activeRoute: ActivatedRoute, private authService:AuthService) { }

  ngOnInit(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    this.getStudy();
  }

  private getStudy(): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    if (id !== undefined) {
      this.studyService.get(id).subscribe((data) => {
        this.study = data;
        if (this.study.patient.birthDate !== undefined)
          this.study.patient.birthDate = new Date(this.study.patient.birthDate);
        if (this.study.createdAt !== undefined)
          this.study.createdAt = new Date(this.study.createdAt);
        this.study.checkpoints.forEach(c  => {
          c.createdAt = new Date(c.createdAt);
          c.createdAt.setTime(this.normalizeDate(c.createdAt));
        });
        this.study.patient.birthDate.setTime(this.normalizeDate(this.study.patient.birthDate));
        this.study.createdAt.setTime(this.normalizeDate(this.study.createdAt));
        console.log(this.study);
      });
    }
  }

  private normalizeDate(date: Date): number {
    return date.getTime() + this.study.patient.birthDate.getTimezoneOffset() * 60 * 1000;
  }
}
