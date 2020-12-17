export class DeductFakeDb {
  public static types = [
    {
      id: '15459251a6d6b397565',
      name: 'CITB levy',
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
    },
    {
      id: '154588a0864d2881124',
      name: 'Fees',
      calculation_method: 0,
      default_amount: 0.0,
      default_repetition: 1,
      deduct_tax: true,
      deduct_nic: true,
      deduct_employee: true,
      deduct_employer: true,
      deduct_cis: true,
      deduct_used_employees: true,
      deduct_used_cis: true
    },
    {
      id: '15453ba60d3baa5daaf',
      name: 'Insurance',
      calculation_method: 0,
      default_amount: 0.0,
      default_repetition: 1,
      deduct_tax: true,
      deduct_nic: true,
      deduct_employee: true,
      deduct_employer: true,
      deduct_cis: true,
      deduct_used_employees: true,
      deduct_used_cis: true
    },
    {
      id: '15453a06c08fb021776',
      name: 'Payroll giving',
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
    },
    {
      id: '154537435d5b32bf11a',
      name: 'Salary sacrifice',
      calculation_method: 2,
      default_amount: 0.0,
      default_repetition: 0,
      deduct_tax: true,
      deduct_nic: true,
      deduct_employee: true,
      deduct_employer: true,
      deduct_cis: true,
      deduct_used_employees: true,
      deduct_used_cis: true
    }
  ];

  public static deduct_default_repetition_types = [
    {
      id: 0,
      name: 'Applicable to this period only'
    },
    {
      id: 1,
      name: 'Repeat until manually removed'
    }
  ];

  public static deduct_default_method_types = [
    {
      id: 0,
      name: 'Fixed amount',
      description: 'Deduction is simple amount (&pound;)'
    },
    {
      id: 1,
      name: '% of basic pay',
      description:
        'Deduction amount is calculated as a percentage of basic pay (sum of period pay, daily pay, hourly pay, and piece of work pay)'
    },
    {
      id: 2,
      name: '% of gross pay',
      description:
        'Deduction amount is calculated as a percentage of basic pay (sum of period pay, daily pay, hourly pay, piece of work pay, statutory pay, fixed amount taxable additions minus fixed amount before-tax deductions)'
    },
    {
      id: 3,
      name: '% of Automatic Enrolment qualifying earnings',
      description:
        "Similar to '% of gross pay', but only applies to the portion of the gross pay within the standard Automatic Enrolment qualifying earnings band limits (annual band from &pound; 6,032 to &pound; 46,350 in 2018/19)"
    },
    {
      id: 4,
      name: '% of net pay',
      description:
        'Deduction amount is calculated as a percentage of net pay (this option prevents deductions from being set as before-tax)'
    }
  ];
}
