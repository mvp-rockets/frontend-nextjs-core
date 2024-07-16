# Install dependencies only when needed
FROM node:20.12.2 AS deps

USER node
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY --chown=node:node package*.json /app

RUN npm install --legacy-peer-deps

# Rebuild the source code only when needed
FROM node:20.12.2 AS builder

USER node
WORKDIR /app
COPY --chown=node:node . /app
COPY --chown=node:node ./env /app/env
COPY --chown=node:node --from=deps /app/package*.json /app
COPY --chown=node:node --from=deps /app/node_modules /app/node_modules

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
# This is required, otherwise next 14 fails in the next build step
ENV NEXT_PRIVATE_STANDALONE true

RUN npm run build && npm prune --production

# Production image, copy all the files and run next
FROM node:20.12.2-slim AS runner

USER node
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_MANUAL_SIG_HANDLE true
ENV PORT 3002
ENV HOSTNAME "0.0.0.0"

COPY --chown=node:node --from=builder /app/next.config.js ./
COPY --chown=node:node --from=builder /app/public /app/public
COPY --chown=node:node --from=builder /app/package*.json /app
COPY --chown=node:node --from=builder /app/env /app/env
#COPY --from=builder --chown=node:node /app/.next ./.next
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static /app/.next/static

EXPOSE 3002
CMD ["node", "server.js"]
