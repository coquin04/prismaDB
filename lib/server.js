const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Require para usar Cors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

// Enpoint GET para regresar todos los exploradores
app.get("/explorers", async (req, res) => {
  const allExplorers = await prisma.explorer.findMany({});
  res.json(allExplorers);
});

// Endpoint GET para regresar los datos de un explorador buscado por ID
app.get("/explorers/:id", async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(explorer);
});

// Endpoint POST para crear nuevos explorers
app.post("/explorers", async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission,
  };
  const message = "Explorer creado.";
  await prisma.explorer.create({ data: explorer });
  return res.json({ message });
});

// Endpoint PUT recibe ID a actualizar y en cuerpo del request los campos a actualizar
app.put("/explorers/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.explorer.update({
    where: {
      id: id,
    },
    data: {
      mission: req.body.mission,
    },
  });

  return res.json({ message: "Actualizado correctamente" });
});

// Endpoint Delete eliminar un explorer por ID

app.delete("/explorers/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.explorer.delete({ where: { id: id } });
  return res.json({ message: "Eliminado correctamente" });
});

// Enpoint GET para regresar todos los commanders
app.get("/commanders", async (req, res) => {
  const allCommanders = await prisma.commander.findMany({});
  res.json(allCommanders);
});

// Endpoint GET para regresar los datos de un commander buscado por ID
app.get("/commanders/:id", async (req, res) => {
  const id = req.params.id;
  const commander = await prisma.commander.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(commander);
});

// Endpoint POST para crear nuevos commanders
app.post("/commanders", async (req, res) => {
  const commander = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrollments: req.body.enrollments,
  };
  const message = "Commander creado.";
  await prisma.commander.create({ data: commander });
  return res.json({ message });
});

// Endpoint PUT recibe ID a actualizar y en cuerpo del request los campos a actualizar
app.put("/commanders/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.commander.update({
    where: {
      id: id,
    },
    data: {
      hasCertification: req.body.hasCertification,
    },
  });

  return res.json({ message: "Actualizado correctamente" });
});

// Endpoint Delete eliminar un Commander por ID

app.delete("/commanders/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await prisma.commander.delete({ where: { id: id } });
  return res.json({ message: "Eliminado correctamente" });
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
