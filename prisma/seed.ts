import { companies, titles } from './test-data.json';
import Database from '../src/app/_logic/database';

const N_EXAMPLES = 20;

const client = Database.getInstance();

async function positionFactory() {
  const company = companies[Math.floor(Math.random() * companies.length)];
  const title = titles[Math.floor(Math.random() * titles.length)];

  const states = await client.processNode.findMany();
  const state = states[Math.floor(Math.random() * states.length)];

  return {
    title: title,
    company: company,
    stateId: state.id,
  };
}
async function seeding() {
  await client.position.deleteMany();
  await client.processEdge.deleteMany();
  await client.processNode.deleteMany();

  await client.initialize();

  for (let i = 0; i < N_EXAMPLES; i++) {
    await client.position.create({
      data: await positionFactory(),
    });
  }
}

seeding();
