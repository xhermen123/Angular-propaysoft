import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'employer-hourly-rates',
  templateUrl: './hourly-rates.component.html',
  styleUrls: ['./hourly-rates.component.scss']
})
export class EmployerHourlyRatesComponent implements OnInit {
  employerHourlyRateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  saveDetails() {}

  private createForm() {
    this.employerHourlyRateForm = this.formBuilder.group({
      description: ['', Validators.required],
      rate: ['', Validators.required],
      taxDeductable: true,
      niDeductable: true,
      employeeDeductable: true,
      employerDeductable: true,
      cisDeductable: true,
      accrueAnnualLeave: true,
      minWage: true,
      usedByEmployees: true,
      usedCIS: true
    });
  }
}
