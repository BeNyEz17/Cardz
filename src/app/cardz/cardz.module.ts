import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {CardzViewerComponent} from "./cardz-viewer/cardz-viewer.component";
import {CardzCustomizationComponent} from "./cardz-customization/cardz-customization.component";
import {RouterModule, Routes} from "@angular/router";
import CardzAllComponent from './cardz-all/cardz-all.component';

const routes: Routes = [
  {path: ':id/customize', component: CardzCustomizationComponent},
  {path: ':id/view', component: CardzViewerComponent},
  {path: 'all', component: CardzAllComponent},
];
@NgModule({
  declarations: [
    CardzViewerComponent,
    CardzCustomizationComponent,
    CardzAllComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CardzModule { }
