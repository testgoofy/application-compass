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

## Deployment

A database change can be made by running the following command:

```bash
npx prisma db push
```

After such a change, the development server must be restarted.
