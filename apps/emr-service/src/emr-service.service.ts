import { Injectable } from '@nestjs/common';

@Injectable()
export class EmrServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
