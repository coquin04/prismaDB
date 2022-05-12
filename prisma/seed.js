const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        username: "ajolonauta",
        mission: "Node",
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        username: "ajolonauta1",
        mission: "Node",
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: "Woopa 2" },
      update: {},
      create: {
        name: "Woopa 2",
        username: "ajolonauta2",
        mission: "Java",
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: "Woopa 3" },
      update: {},
      create: {
        name: "Woopa 3",
        username: "ajolonauta3",
        mission: "Node",
      },
    });

    console.log("Create 3 explorers");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

  // Ajolocommanders
  try {
    const coopa = await prisma.commander.upsert({
      where: { name: "Coopa" },
      update: {},
      create: {
        name: "Coopa",
        lang: "ES",
        missionCommander: "ajolocommander",
        enrollments: 3,
      },
    });

    const coopa1 = await prisma.commander.upsert({
      where: { name: "Coopa1" },
      update: {},
      create: {
        name: "Coopa1",
        lang: "EN",
        missionCommander: "ajolocommander1",
        enrollments: 6,
      },
    });

    const coopa2 = await prisma.commander.upsert({
      where: { name: "Coopa2" },
      update: {},
      create: {
        name: "Coopa2",
        lang: "ES",
        missionCommander: "ajolocommander2",
        enrollments: 9,
      },
    });

    const coopa3 = await prisma.commander.upsert({
      where: { name: "Coopa3" },
      update: {},
      create: {
        name: "Coopa3",
        lang: "EN",
        missionCommander: "ajolocommander3",
        enrollments: 12,
      },
    });

    console.log("Create 3 commanders");
  } catch (e1) {
    console.error(e1);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
