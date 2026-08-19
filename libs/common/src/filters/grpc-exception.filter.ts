import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import type { Response } from 'express';

@Catch()
export class GrpcToHttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Determine gRPC status code
    const grpcCode = exception.code ?? exception.status;
    const httpStatus = this.mapGrpcToHttpStatus(grpcCode);

    const message =
      exception.details ||
      exception.message ||
      'An unexpected error occurred';

    response.status(httpStatus).json({
      statusCode: httpStatus,
      message,
      error: exception.name || 'MicroserviceError',
      timestamp: new Date().toISOString(),
    });
  }

  private mapGrpcToHttpStatus(code: number | undefined): number {
    switch (code) {
      case 3: // INVALID_ARGUMENT
        return HttpStatus.BAD_REQUEST;
      case 5: // NOT_FOUND
        return HttpStatus.NOT_FOUND;
      case 6: // ALREADY_EXISTS
        return HttpStatus.CONFLICT;
      case 7: // PERMISSION_DENIED
        return HttpStatus.FORBIDDEN;
      case 8: // RESOURCE_EXHAUSTED
        return HttpStatus.TOO_MANY_REQUESTS;
      case 9: // FAILED_PRECONDITION
        return HttpStatus.PRECONDITION_FAILED;
      case 11: // OUT_OF_RANGE
        return HttpStatus.BAD_REQUEST;
      case 12: // UNIMPLEMENTED
        return HttpStatus.NOT_IMPLEMENTED;
      case 14: // UNAVAILABLE
        return HttpStatus.SERVICE_UNAVAILABLE;
      case 16: // UNAUTHENTICATED
        return HttpStatus.UNAUTHORIZED;
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}
