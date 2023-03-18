import { PrismaClient } from '@prisma/client';

const primsa = new PrismaClient();

async function main() {
  const post1 = await primsa.article.upsert({
    where: {
      title: 'First Article with Prisma',
    },
    update: {},
    create: {
      title: 'First Article with Prisma',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      published: false,
      updatedAt: new Date(),
    },
  });

  const post2 = await primsa.article.upsert({
    where: {
      title: 'Second Article with Prisma',
    },
    update: {},
    create: {
      title: 'Second Article with Prisma',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      published: false,
      updatedAt: new Date(),
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await primsa.$disconnect();
  });
