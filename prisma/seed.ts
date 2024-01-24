import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const drink1 = await prisma.drinks.upsert({
    where: { name: 'Aqua' },
    update: {},
    create: {
      name: 'Aqua',
      price: 2000,
    },
  });

  const drink2 = await prisma.drinks.upsert({
    where: { name: 'Sosro' },
    update: {},
    create: {
      name: 'Sosro',
      price: 5000,
    },
  });

  console.log({ drink1, drink2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
