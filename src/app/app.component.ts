import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SidenavService } from './core/services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  subs: Subscription[] = [];
  sidenavStatus: boolean = false;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.subs.push(
      this.subToGetSidenavStatus()
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  private subToGetSidenavStatus() {
    return this.sidenavService.getSidenavStatus().subscribe(status => {
      this.sidenavStatus = status;
    });
  }
}
