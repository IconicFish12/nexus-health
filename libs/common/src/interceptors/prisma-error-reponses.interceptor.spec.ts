import { PrismaErrorReponsesInterceptor } from './prisma-error-reponses.interceptor';

describe('PrismaErrorReponsesInterceptor', () => {
  it('should be defined', () => {
    expect(new PrismaErrorReponsesInterceptor()).toBeDefined();
  });
});
