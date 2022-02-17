
   
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { IndicHeaderComponent } from './indic-header/indic-header.component';
import { IndicCardsComponent } from './indic-cards/indic-cards.component';
import { IndicListComponent } from './indic-list/indic-list.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from "../app.material.module";
import { IndicLeftbarComponent } from './indic-leftbar/indic-leftbar.component';
import { AddSucessComponent } from './add-sucess/add-sucess.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    IndicHeaderComponent,
    IndicCardsComponent,
    IndicListComponent,
    IndicLeftbarComponent,
    AddSucessComponent
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
    FontAwesomeModule
  ]
})
export class SharedModule { }