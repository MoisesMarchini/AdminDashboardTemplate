import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  get isCollapsed() {
    return this.sidebarService.isCollapsed();
  }

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }

  closeSidebar() {
    this.sidebarService.closeSidebar()
  }

}
