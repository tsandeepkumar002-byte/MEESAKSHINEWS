FROM node:18-slim AS build
WORKDIR /app

# Build frontend
COPY ./frontend ./frontend
WORKDIR /app/frontend
RUN npm install && npm run build

# --- Backend Stage ---
FROM node:18-slim
WORKDIR /app

# Copy backend files
COPY ./backend/package*.json ./
RUN npm install --production

COPY ./backend .
COPY --from=build /app/frontend/dist ./frontend/dist

EXPOSE 4000
CMD ["node", "server.js"]
