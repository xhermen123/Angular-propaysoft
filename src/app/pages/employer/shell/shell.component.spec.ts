import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService, CoreModule, MockAuthenticationService } from '@app/core';

import { EmployerShellComponent } from './shell.component';
import { EmployerHeaderComponent } from './header/header.component';

describe('EmployerShellComponent', () => {
  let component: EmployerShellComponent;
  let fixture: ComponentFixture<EmployerShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), NgbModule, CoreModule],
      providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }],
      declarations: [EmployerHeaderComponent, EmployerShellComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
