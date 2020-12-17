import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationGuard, AuthenticationService, MockAuthenticationService } from '@app/core';
import { EmployerShellComponent } from './shell.component';
import { EmployerShell } from './shell.service';

describe('EmployerShell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerShellComponent],
      providers: [AuthenticationGuard, { provide: AuthenticationService, useClass: MockAuthenticationService }]
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of shell', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = EmployerShell.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(EmployerShellComponent);
    });
  });
});
