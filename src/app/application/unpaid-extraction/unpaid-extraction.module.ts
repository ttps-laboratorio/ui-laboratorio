import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnpaidExtractionRoutingModule } from './unpaid-extraction-routing.module';
import { UnpaidExtractionListComponent } from './unpaid-extraction-list/unpaid-extraction-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UnpaidExtractionListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UnpaidExtractionRoutingModule
  ]
})
export class UnpaidExtractionModule { }
