import { Controller, Get } from '@nestjs/common';
import { HrManagementService } from './hr-management.service';

@Controller()
export class HrManagementController {
  constructor(private readonly hrManagementService: HrManagementService) {}

  @Get()
  getHello(): string {
    return this.hrManagementService.getHello();
  }
}
