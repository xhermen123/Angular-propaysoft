import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { EmployerShell } from './shell/shell.service';
import { EditEmployerDetailsComponent } from './sub-pages/details/details.component';
import { EmployerSavingSchemesComponent } from './sub-pages/savings-schemes/savings-schemes.component';
import { EmployerPieceRatesComponent } from './sub-pages/piece-rates/piece-rates.component';
import { EmployerHourlyRatesComponent } from './sub-pages/hourly-rates/hourly-rates.component';
import { EmployerDepartmentsComponent } from './sub-pages/departments/departments.component';
import { EmployerDeductionTypesComponent } from './sub-pages/deduction-types/deduction-types.component';
import { EmployerDailyRatesComponent } from './sub-pages/daily-rates/daily-rates.component';
import { EmployerBankAccountsComponent } from './sub-pages/bank-accounts/bank-accounts.component';
import { EmployerAdditionTypesComponent } from './sub-pages/addition-types/addition-types.component';
import { EmployerCalendarComponent } from './sub-pages/calendar/calendar.component';
import { DeductsService } from './sub-pages/deduction-types/deduction-types.service';

const routes: Routes = [
  EmployerShell.childRoutes([
    { path: '', redirectTo: 'details', pathMatch: 'full' },
    {
      path: 'details',
      component: EditEmployerDetailsComponent
    },
    {
      path: 'calendar',
      component: EmployerCalendarComponent
    },
    {
      path: 'addition-types',
      component: EmployerAdditionTypesComponent
    },
    {
      path: 'bank-accounts',
      component: EmployerBankAccountsComponent
    },
    {
      path: 'daily-rates',
      component: EmployerDailyRatesComponent
    },
    {
      path: 'deduction-types',
      component: EmployerDeductionTypesComponent,
      resolve: {
        deductions: DeductsService
      }
    },
    {
      path: 'departments',
      component: EmployerDepartmentsComponent
    },
    {
      path: 'hourly-rates',
      component: EmployerHourlyRatesComponent
    },
    {
      path: 'piece-rates',
      component: EmployerPieceRatesComponent
    },
    {
      path: 'savings-schemes',
      component: EmployerSavingSchemesComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DeductsService]
})
export class EmployerRoutingModule {}
