import { Transport, type MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

export class GrpcHost {
  constructor(private readonly config: ConfigService = new ConfigService()) {}

  private getGrpcUrl(
    defaultHost?: string,
    defaultPort?: number,
    servicePrefix?: string,
  ): string {
    const host =
      this.config.get<string>(`${servicePrefix}_GRPC_HOST`) ||
      this.config.get<string>('GRPC_HOST') ||
      '0.0.0.0';

    const port =
      this.config.get<number>(`${servicePrefix}_GRPC_PORT`) || defaultPort;

    return `${host}:${port}`;
  }

  private getKeepaliveOptions() {
    const keepaliveTime = this.config.get<number>('GRPC_KEEPALIVE_TIME_MS');
    const keepaliveTimeout = this.config.get<number>(
      'GRPC_KEEPALIVE_TIMEOUT_MS',
    );

    return keepaliveTime && keepaliveTimeout
      ? {
          keepaliveTimeMs: Number(keepaliveTime),
          keepaliveTimeoutMs: Number(keepaliveTimeout),
        }
      : undefined;
  }

  private buildClientOptions(
    packageName: string,
    protoFileName: string,
    defaultPort?: number,
    defaultHost?: string,
    servicePrefix?: string,
  ): MicroserviceOptions {
    const grpcUrl = this.getGrpcUrl(defaultHost, defaultPort, servicePrefix);

    return {
      transport: Transport.GRPC,
      options: {
        package: packageName,
        protoPath: join(__dirname, 'v1/service-protobuf', protoFileName),
        url: grpcUrl,
        maxReceiveMessageLength:
          this.config.get<number>('GRPC_MAX_RECEIVE_MESSAGE_LENGTH') || 4194304,
        maxSendMessageLength:
          this.config.get<number>('GRPC_MAX_SEND_MESSAGE_LENGTH') || 4194304,
        keepalive: this.getKeepaliveOptions(),
      },
    };
  }

  apiGateway(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.gateway.v1',
      'api-gateway.proto',
      500050,
      'API_GATEWAY',
    );
  }

  authService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.auth.v1',
      'auth-service.proto',
      500051,
      'AUTH_SERVICE',
    );
  }

  appointmentService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.appointment.v1',
      'appointment-service.proto',
      500052,
      'APPOINTMENT_SERVICE',
    );
  }

  billingService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.billing.v1',
      'billing-service.proto',
      500053,
      'BILLING_SERVICE',
    );
  }

  emrService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.emr.v1',
      'emr-service.proto',
      500054,
      'EMR_SERVICE',
    );
  }

  inventoryService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.inventory.v1',
      'inventory-service.proto',
      500055,
      'INVENTORY_SERVICE',
    );
  }

  notificationService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.notification.v1',
      'notification-service.proto',
      500056,
      'NOTIFICATION_SERVICE',
    );
  }

  pharmacyService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.pharmacy.v1',
      'pharmacy-service.proto',
      500057,
      'PHARMACY_SERVICE',
    );
  }

  staffService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.staff.v1',
      'staff-service.proto',
      500058,
      'STAFF_SERVICE',
    );
  }

  wardService(): MicroserviceOptions {
    return this.buildClientOptions(
      'nexus.ward.v1',
      'ward-service.proto',
      500059,
      'WARD_SERVICE',
    );
  }
}
