import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './web-component-root/components/page1/page1.component';
import { Page2Component } from './web-component-root/components/page2/page2.component';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: '',
    component: Page1Component,
    outlet: 'webComponentWithRouter'
  },
  {
    path: 'page2',
    component: Page2Component,
    outlet: 'webComponentWithRouter'
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule]
})
export class AppRoutingModule { }
