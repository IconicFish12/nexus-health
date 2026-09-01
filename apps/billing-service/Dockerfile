FROM oven/bun:1.3-alpine AS base 
WORKDIR /app

FROM base AS pruner
COPY . . 
RUN bunx turbo prune billing-service --docker

FROM base AS builder 
WORKDIR /app

COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/bun.lock* ./
RUN bun install --frozen-lockfile

COPY --from=pruner /app/out/full .
COPY turbo.json turbo.json
RUN bun install

RUN bunx turbo run prisma:generate --filter=billing-service
RUN bunx turbo run build --filter=billing-service

FROM oven/bun:1.3-alpine AS release
WORKDIR /app

ENV NODE_ENV=production

COPY --chown=bun:bun --from=builder /app/node_modules ./node_modules
COPY --chown=bun:bun --from=builder /app/apps/billing-service/dist ./dist
COPY --chown=bun:bun --from=builder /app/apps/billing-service/package.json ./package.json

USER bun 
EXPOSE 3003

CMD ["bun", "dist/main.js"]
