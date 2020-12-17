import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/core';
import { EmployerShellComponent } from './shell.component';

/**
 * Provides helper methods to create routes.
 */
export class EmployerShell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: EmployerShellComponent,
      children: routes,
      // canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
