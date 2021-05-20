import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import {CheckoutComponent} from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import {IndexComponent} from './index/index.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }