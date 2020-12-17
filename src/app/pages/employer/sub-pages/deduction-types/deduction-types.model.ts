export class DeductType {
  id: string;
  name: string;
  calculation_method: number;
  default_amount: number;
  default_repetition: number;
  deduct_tax: boolean;
  deduct_nic: boolean;
  deduct_employee: boolean;
  deduct_employer: boolean;
  deduct_cis: boolean;
  deduct_used_employees: boolean;
  deduct_used_cis: boolean;

  constructor(deduct: any) {
    this.id = deduct.id;
    this.name = deduct.name;
    this.calculation_method = deduct.calculation_method;
    this.default_amount = deduct.default_amount;
    this.default_repetition = deduct.default_repetition;
    this.deduct_tax = deduct.deduct_tax;
    this.deduct_nic = deduct.deduct_nic;
    this.deduct_employee = deduct.deduct_employee;
    this.deduct_employer = deduct.deduct_employer;
    this.deduct_cis = deduct.deduct_cis;
    this.deduct_used_employees = deduct.deduct_used_employees;
    this.deduct_used_cis = deduct.deduct_used_cis;
  }
}
