import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientEmrServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
