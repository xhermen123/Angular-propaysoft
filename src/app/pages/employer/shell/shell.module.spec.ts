import { EmployerShellModule } from './shell.module';

describe('ShellModule', () => {
  let shellModule: EmployerShellModule;

  beforeEach(() => {
    shellModule = new EmployerShellModule();
  });

  it('should create an instance', () => {
    expect(shellModule).toBeTruthy();
  });
});
