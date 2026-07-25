import { Injectable } from '@nestjs/common';

@Injectable()
export class WardServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
