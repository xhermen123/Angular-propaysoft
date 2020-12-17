import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmployerShellComponent } from './shell.component';
import { EmployerHeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule],
  declarations: [EmployerHeaderComponent, EmployerShellComponent]
})
export class EmployerShellModule {}
