import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }

  openSideBar() {
    this.sidebarService.openSidebar();
  }

}
