# Application Compass

## Getting Started

First, start a postgres database for development:

```bash
docker run --name dev-postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=application-compass -d postgres
npx prisma db push
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

At the moment, the application has to be deployed manually.

```bash
docker build -t git.testgoofy.ch/lukas/application-compass:latest .
docker push git.testgoofy.ch/lukas/application-compass:latest
```

Afterwards the container must be restarted.
