import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleBatchRoutingModule } from './sample-batch-routing.module';
import { SampleBatchListComponent } from './sample-batch-list/sample-batch-list.component';
import { SampleBatchShowComponent } from './sample-batch-show/sample-batch-show.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SampleBatchListComponent,
    SampleBatchShowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SampleBatchRoutingModule
  ]
})
export class SampleBatchModule { }
