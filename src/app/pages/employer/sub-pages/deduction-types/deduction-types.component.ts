import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DeductsService } from './deduction-types.service';
import { DeductType } from './deduction-types.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'employer-deduction-types',
  templateUrl: './deduction-types.component.html',
  styleUrls: ['./deduction-types.component.scss']
})
export class EmployerDeductionTypesComponent implements OnInit {
  @ViewChild('saveModalContent') saveModalContent: ElementRef;
  @ViewChild('deleteModalContent') deleteModalContent: ElementRef;

  employerDeductioinTypesForm: FormGroup;
  currentType: any;
  newDeductFlag: boolean = false;

  deduct_types: any[];
  deduct_calc_methods: any[];
  deduct_default_repetition: any[];

  onDeductTypesChanged: Subscription;
  onDeductCalcMethodsChanged: Subscription;
  onDeductDefaultRepetition: Subscription;

  constructor(
    private deductsService: DeductsService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.onDeductTypesChanged = this.deductsService.onDeductTypesUpdated.subscribe(types => {
      this.deduct_types = this.deductsService.deduct_types;
    });

    this.onDeductCalcMethodsChanged = this.deductsService.onDeductCalcMethodUpdated.subscribe(methods => {
      this.deduct_calc_methods = this.deductsService.deduct_calc_methods;
    });

    this.onDeductDefaultRepetition = this.deductsService.onDeductDefaultReputitionUpdated.subscribe(repetitions => {
      this.deduct_default_repetition = this.deductsService.deduct_default_repetition;
    });

    this.deduct_types[0] ? this.selectDeductType(this.deduct_types[0]) : null;
  }

  ngOnDestroy() {
    this.onDeductTypesChanged.unsubscribe();
    this.onDeductCalcMethodsChanged.unsubscribe();
    this.onDeductDefaultRepetition.unsubscribe();
  }

  onFormValuesChange() {
    this.employerDeductioinTypesForm.valueChanges.subscribe(val => {});
  }

  selectDeductType(type: DeductType) {
    this.currentType = type;
    this.newDeductFlag = false;

    this.employerDeductioinTypesForm.reset({
      name: type.name,
      calculation_method: type.calculation_method,
      default_amount: type.default_amount,
      default_repetition: type.default_repetition,
      deduct_tax: type.deduct_tax,
      deduct_nic: type.deduct_nic,
      deduct_employee: type.deduct_employee,
      deduct_employer: type.deduct_employer,
      deduct_cis: type.deduct_cis,
      deduct_used_employees: type.deduct_used_employees,
      deduct_used_cis: type.deduct_used_cis
    });
  }

  onClickAddButton() {
    this.currentType = null;
    this.newDeductFlag = true;

    this.employerDeductioinTypesForm.reset({
      name: '',
      calculation_method: 0,
      default_amount: 0.0,
      default_repetition: 0,
      deduct_tax: true,
      deduct_nic: true,
      deduct_employee: true,
      deduct_employer: true,
      deduct_cis: true,
      deduct_used_employees: true,
      deduct_used_cis: true
    });
  }

  onClickDeleteButton() {
    this.modalService.open(this.deleteModalContent);
  }

  saveDetails() {
    if (this.newDeductFlag) {
      this.deductsService.createNewDeductType(this.employerDeductioinTypesForm.value).then(res => {
        this.deduct_default_repetition = this.deductsService.deduct_default_repetition;
      });
    } else {
      this.employerDeductioinTypesForm.value.id = this.currentType.id;
      this.deductsService.updateDeductType(this.employerDeductioinTypesForm.value).then(res => {
        this.deduct_default_repetition = this.deductsService.deduct_default_repetition;
      });
    }
  }

  cancelChanges() {
    if (!this.currentType) {
      this.employerDeductioinTypesForm.reset({
        name: '',
        calculation_method: 0,
        default_amount: 0.0,
        default_repetition: 0,
        deduct_tax: true,
        deduct_nic: true,
        deduct_employee: true,
        deduct_employer: true,
        deduct_cis: true,
        deduct_used_employees: true,
        deduct_used_cis: true
      });
    } else {
      this.employerDeductioinTypesForm.reset({
        name: this.currentType.name,
        calculation_method: this.currentType.calculation_method,
        default_amount: this.currentType.default_amount,
        default_repetition: this.currentType.default_repetition,
        deduct_tax: this.currentType.deduct_tax,
        deduct_nic: this.currentType.deduct_nic,
        deduct_employee: this.currentType.deduct_employee,
        deduct_employer: this.currentType.deduct_employer,
        deduct_cis: this.currentType.deduct_cis,
        deduct_used_employees: this.currentType.deduct_used_employees,
        deduct_used_cis: this.currentType.deduct_used_cis
      });
    }
  }

  private createForm() {
    this.employerDeductioinTypesForm = this.formBuilder.group({
      name: ['', Validators.required],
      calculation_method: 0,
      default_amount: 0.0,
      default_repetition: 0,
      deduct_tax: true,
      deduct_nic: true,
      deduct_employee: true,
      deduct_employer: true,
      deduct_cis: true,
      deduct_used_employees: true,
      deduct_used_cis: true
    });
  }

  saveChangedDeductType() {
    if (this.employerDeductioinTypesForm.valid) {
      this.saveDetails();
    }

    this.modalService.dismissAll();
  }

  unsaveChangedDeductType() {
    this.modalService.dismissAll();
  }

  cancelChangedDeductType() {
    this.modalService.dismissAll();
  }

  confirmDeleteDeductType() {
    if (this.currentType) {
      this.deductsService.deleteSelectedDeductType(this.currentType);
    }
    this.modalService.dismissAll();
  }

  cancelDeleteDeductType() {
    this.modalService.dismissAll();
  }
}
