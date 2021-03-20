import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenavStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public setSidenavStatus(status: boolean) {
    this.sidenavStatus.next(status);
  }

  public getSidenavStatus() {
    return this.sidenavStatus;
  }
}
