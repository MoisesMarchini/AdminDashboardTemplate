import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWithHeaderComponent } from './card-with-header/card-with-header.component';
import { CardMiniInfoComponent } from './card-mini-info/card-mini-info.component';
import { CardTableComponent } from './card-table/card-table.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardTableStrippedComponent } from './card-table-stripped/card-table-stripped.component';



@NgModule({
  declarations: [
    CardWithHeaderComponent,
    CardMiniInfoComponent,
    CardTableComponent,
    CardFormComponent,
    CardTableStrippedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardWithHeaderComponent,
    CardMiniInfoComponent,
    CardTableComponent,
    CardFormComponent,
    CardTableStrippedComponent
  ]
})
export class CardsModule { }
