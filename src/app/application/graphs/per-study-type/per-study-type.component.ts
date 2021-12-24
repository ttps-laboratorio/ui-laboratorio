import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-study-type',
  templateUrl: './per-study-type.component.html',
  styleUrls: ['./per-study-type.component.css']
})
export class PerStudyTypeComponent implements OnInit {

  chart = []; // This will hold our chart info

  constructor() { }

  ngOnInit(): void {
  }

}
