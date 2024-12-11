FROM node:23.3.0

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Generate prisma client
COPY prisma prisma
RUN npx prisma generate

# Build the application
COPY tsconfig.json .
COPY .eslintrc.json .
COPY next.config.ts .
COPY postcss.config.mjs .
COPY tailwind.config.ts .
COPY public public
COPY src/app src/app
RUN rm src/app/_components/*.stories.tsx
RUN npm run build

# Serve the application
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["npm", "run", "start"]
