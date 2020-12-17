import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService, I18nService, MockAuthenticationService } from '@app/core';
import { EmployerHeaderComponent } from './header.component';

describe('EmployerHeaderComponent', () => {
  let component: EmployerHeaderComponent;
  let fixture: ComponentFixture<EmployerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgbModule, TranslateModule.forRoot()],
      declarations: [EmployerHeaderComponent],
      providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }, I18nService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
