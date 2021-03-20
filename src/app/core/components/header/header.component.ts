import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private opened: boolean = false;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  public updateSidenav() {
    this.opened = !this.opened;
    this.sidenavService.setSidenavStatus(this.opened);
  }
}
