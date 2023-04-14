import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private static isCollapsed = true;

  constructor() { }

  isCollapsed() {
    return SidebarService.isCollapsed;
  }

  openSidebar() {
    SidebarService.isCollapsed = false;
  }

  closeSidebar() {
    SidebarService.isCollapsed = true;
  }
}
