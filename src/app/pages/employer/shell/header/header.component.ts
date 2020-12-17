import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, I18nService } from '@app/core';

@Component({
  selector: 'employer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class EmployerHeaderComponent implements OnInit {
  menuHidden = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {}
}
