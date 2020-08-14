# Serve Files

Serve files into `/public` folder.

## Setup and Running

```bash
cp .env.dist .env

yarn install

# Up for production
yarn run start

# Or for running in development with auto-restart on file changes
yarn run dev
```

## Setup and Running with Docker

```bash
cp .env.dist .env

cp docker-compose.development.yml docker-compose.override.yml


# Up for production
docker-compose -f docker-compose.yml up

# Of ro running in development with auto.restart on file changes
docker-compose up
```

## Release

```bash
yarn run release
```
