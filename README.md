# Application Compass

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Second, run the storybook:

```bash
npm run storybook
```

Third, start Prisma Studio to view the database:

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
