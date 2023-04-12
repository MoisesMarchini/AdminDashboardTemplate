import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWithHeaderComponent } from './card-with-header/card-with-header.component';
import { CardMiniInfoComponent } from './card-mini-info/card-mini-info.component';



@NgModule({
  declarations: [
    CardWithHeaderComponent,
    CardMiniInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardWithHeaderComponent,
    CardMiniInfoComponent
  ]
})
export class CardsModule { }
