import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDesignModule } from './app-design/app-design.module';
import { BookRecordComponent } from './app-homepage/book-record/book-record.component';
import { PaymentsComponent } from './app-homepage/payments/payments.component';


const routes: Routes = [
  {
    path: "",
    redirectTo:"/bookrecord",
    pathMatch:"full"
  },
  {
    path:"bookrecord",
    component: BookRecordComponent
  },
  {
    path:"payments",
    component: PaymentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AppDesignModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
