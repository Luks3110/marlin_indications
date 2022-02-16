
   
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { IndicHeaderComponent } from './indic-header/indic-header.component';
import { IndicCardsComponent } from './indic-cards/indic-cards.component';
import { IndicListComponent } from './indic-list/indic-list.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app.material.module";
import { IndicLeftbarComponent } from './indic-leftbar/indic-leftbar.component';

@NgModule({
  declarations: [
    IndicHeaderComponent,
    IndicCardsComponent,
    IndicListComponent,
    IndicLeftbarComponent
  ],
  exports: [
    IndicHeaderComponent,
    IndicCardsComponent,
    IndicListComponent,
    IndicLeftbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
  ]
})
export class SharedModule { }