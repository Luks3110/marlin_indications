
   
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { IndicHeaderComponent } from './indic-header/indic-header.component';
import { CardsComponent } from './cards/cards.component';
import { IndicListComponent } from './indic-list/indic-list.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app.material.module";



@NgModule({
  declarations: [
    IndicHeaderComponent,
    CardsComponent,
    IndicListComponent
  ],
  exports: [
    IndicHeaderComponent,
    CardsComponent,
    IndicListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
  ]
})
export class SharedModule { }