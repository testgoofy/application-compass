# Application Compass

## Getting Started

First, start a postgres database for development:

```bash
docker stop dev-postgres
docker rm dev-postgres 
docker run --name dev-postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=application-compass -d postgres
npx prisma db push
npx prisma db seed
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Further, run the storybook:

```bash
npm run storybook
```

Finally, start Prisma Studio to view the database:

```bash
npx prisma studio
```

## Development

A database change can be made by running the following command:

```bash
npx prisma db push
```

After such a change, the development server must be restarted.

## Deployment

On pushing to Github, the OCI image is built automatically.
