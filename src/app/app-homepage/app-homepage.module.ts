import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookRecordComponent } from './book-record/book-record.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PaymentsComponent } from './payments/payments.component';
@NgModule({
  declarations: [LoaderComponent, BookRecordComponent, PaymentsComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports:[
    LoaderComponent
  ]
})
export class AppHomepageModule { }
