import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { EmployerRoutingModule } from './employer-routing.module';
import { EditEmployerDetailsComponent } from './sub-pages/details/details.component';
import { EmployerShellModule } from './shell/shell.module';
import { EmployerCalendarComponent } from './sub-pages/calendar/calendar.component';
import { EmployerAdditionTypesComponent } from './sub-pages/addition-types/addition-types.component';
import { EmployerBankAccountsComponent } from './sub-pages/bank-accounts/bank-accounts.component';
import { EmployerDailyRatesComponent } from './sub-pages/daily-rates/daily-rates.component';
import { EmployerDeductionTypesComponent } from './sub-pages/deduction-types/deduction-types.component';
import { EmployerDepartmentsComponent } from './sub-pages/departments/departments.component';
import { EmployerHourlyRatesComponent } from './sub-pages/hourly-rates/hourly-rates.component';
import { EmployerPieceRatesComponent } from './sub-pages/piece-rates/piece-rates.component';
import { EmployerSavingSchemesComponent } from './sub-pages/savings-schemes/savings-schemes.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    NgbModule,
    EmployerRoutingModule,
    EmployerShellModule
  ],
  declarations: [
    EditEmployerDetailsComponent,
    EmployerCalendarComponent,
    EmployerAdditionTypesComponent,
    EmployerBankAccountsComponent,
    EmployerDailyRatesComponent,
    EmployerDeductionTypesComponent,
    EmployerDepartmentsComponent,
    EmployerHourlyRatesComponent,
    EmployerPieceRatesComponent,
    EmployerSavingSchemesComponent
  ],
  providers: []
})
export class EmployerModule {}
