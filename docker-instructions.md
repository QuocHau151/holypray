# React Vite Application with Docker

## Build and Run

### Using Docker Compose (Recommended)

```bash
# Build and run the application
docker-compose up --build

# Run in background
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Using Docker directly

```bash
# Build the image
docker build -t my-app .

# Run the container
docker run -p 3000:80 --env-file .env my-app
```

## Environment Variables

The application requires these environment variables from your `.env` file:

- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL`

## Production Deployment

For production deployment:

1. Ensure your `.env` file contains the correct production values
2. Build and run with: `docker-compose -f docker-compose.yml up -d --build`
3. The application will be available on port 3000

## Health Check

The container includes a health check endpoint at `http://localhost:3000/`
