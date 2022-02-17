import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//RoutingModule
import { RoutingModule } from './routing.module';

//Modules
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from "../app.material.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Pages
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    AppMaterialModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }