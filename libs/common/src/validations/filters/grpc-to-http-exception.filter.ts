import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  type RpcExceptionFilter,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import type { Observable } from 'rxjs';

@Catch()
export class GrpcToHttpExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: any, host: ArgumentsHost): Observable<any> {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const httpStatus = this.mapGrpcToHttpStatus(exception.code);

    return response.status(httpStatus).json({
      statusCode: httpStatus,
      message:
        exception.details || exception.message || 'Internal Server Error',
      error: exception.name,
    });
  }

  private mapGrpcToHttpStatus(code: number): number {
    switch (code) {
      case 3:
        return HttpStatus.BAD_REQUEST;
      case 5:
        return HttpStatus.NOT_FOUND;
      case 6:
        return HttpStatus.CONFLICT;
      case 7:
        return HttpStatus.FORBIDDEN;
      case 16:
        return HttpStatus.UNAUTHORIZED;
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}
