import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
