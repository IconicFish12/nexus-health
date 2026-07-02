import { EmployeeRolesGuard } from './employee-roles.guard';

describe('EmployeeRolesGuard', () => {
  it('should be defined', () => {
    expect(new EmployeeRolesGuard()).toBeDefined();
  });
});
