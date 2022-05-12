const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

// Enpoint GET para regresar todos los exploradores
app.get("/explorers", async (req, res) => {
  const allExplorers = await prisma.explorer.findMany({});
  res.json(allExplorers);
});

// Endpoint para regresar los datos de un explorador buscado por ID
app.get("/explorers/:id", async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(explorer);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
