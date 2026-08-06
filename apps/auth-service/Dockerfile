FROM oven/bun:1.3-alpine AS base 
WORKDIR /app

FROM base AS pruner
COPY . . 
RUN bunx turbo prune auth-service --docker

FROM base AS builder 
WORKDIR /app

# First install dependencies with lockfile for layer caching
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source code and re-link workspace packages
COPY --from=pruner /app/out/full .
COPY turbo.json turbo.json
RUN bun install

RUN bunx turbo run prisma:generate --filter=auth-service
RUN bunx turbo run build --filter=auth-service

FROM oven/bun:1.3-alpine AS release
WORKDIR /app

ENV NODE_ENV=production

COPY --chown=bun:bun --from=builder /app/node_modules ./node_modules
COPY --chown=bun:bun --from=builder /app/apps/auth-service/dist ./dist
COPY --chown=bun:bun --from=builder /app/apps/auth-service/package.json ./package.json

USER bun 
EXPOSE 5002

CMD ["bun", "dist/main.js"]
