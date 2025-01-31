import {PrismaClient} from '@prisma/client';

export default class Database extends PrismaClient {
  private static instance: Database | undefined = undefined;

  public static getInstance() {
    if (Database.instance == undefined) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  private constructor() {
    super();

    this.initialize();
  }

  public async initialize() {
    if (
      (await this.processEdge.count()) <= 0 &&
      (await this.processNode.count()) <= 0
    ) {
      const init = await this.processNode.create({
        data: {
          name: 'Initial',
          group: 'InProgress',
        },
      });

      const applied = await this.processNode.create({
        data: {
          name: 'Applied',
          group: 'InProgress',
        },
      });

      const interview1 = await this.processNode.create({
        data: {
          name: 'Interview Round 1',
          group: 'InProgress',
        },
      });

      const interview2 = await this.processNode.create({
        data: {
          name: 'Interview Round 2',
          group: 'InProgress',
        },
      });

      const offering = await this.processNode.create({
        data: {
          name: 'Contract Offering',
          group: 'InProgress',
        },
      });

      const accepted = await this.processNode.create({
        data: {
          name: 'Accepted',
          group: 'Done',
        },
      });

      const rejectedCompany = await this.processNode.create({
        data: {
          name: 'Rejected by Company',
          group: 'Rejected',
        },
      });

      const rejectedApplicant = await this.processNode.create({
        data: {
          name: 'Rejected by Applicant',
          group: 'Rejected',
        },
      });

      await this.processEdge.create({
        data: {
          fromId: init.id,
          toId: applied.id,
        },
      });

      await this.processEdge.create({
        data: {
          fromId: applied.id,
          toId: interview1.id,
        },
      });

      await this.processEdge.create({
        data: {
          fromId: interview1.id,
          toId: interview2.id,
        },
      });

      await this.processEdge.create({
        data: {
          fromId: interview2.id,
          toId: offering.id,
        },
      });

      await this.processEdge.create({
        data: {
          fromId: offering.id,
          toId: accepted.id,
        },
      });
    }
  }
}
