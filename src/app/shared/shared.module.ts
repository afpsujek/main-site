import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
]

@NgModule({
  declarations: [],
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class SharedModule { }
