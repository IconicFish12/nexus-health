import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthIndicatorService,
  HttpHealthIndicator,
  DiskHealthIndicator,
  MicroserviceHealthIndicator,
  GRPCHealthIndicator,
  MemoryHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private grpc: GRPCHealthIndicator,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
    private service: MicroserviceHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      // 1. Memory Check
      () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 500 * 1024 * 1024),

      // 2. Storage / Disk Check (Used space < 90%)
      () =>
        this.disk.checkStorage('disk_storage', {
          thresholdPercent: 0.9,
          path: '/',
        }),

      () =>
        this.service.pingCheck('nats_broker', {
          transport: Transport.NATS,
          options: {
            servers: [process.env.NATS_URL || 'nats://localhost:4222'],
          },
        }),

      // 4. gRPC Downstream Microservices Health Check
      () =>
        this.grpc.checkService('user_grpc_service', 'user.v1.UserService', {
          url: 'localhost:50051',
          protoPath: join(__dirname, '../proto/health.proto'),
        }),
    ]);
  }
}
