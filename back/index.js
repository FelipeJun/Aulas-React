const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://senac:batata123@cluster0.dywejmt.mongodb.net/?retryWrites=true&w=majority";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const myCollection = "karts";
const db = client.db("Kart");

async function insere1elemento(nomePiloto,numPiloto,posicao,categoria) {
  const registrados = db.collection(myCollection);
  const newReg = { nomePiloto: nomePiloto, numPiloto: numPiloto,posicao: posicao,categoria: categoria };
  const result = await registrados.insertOne(newReg);
  console.log(`O usuário registrado foi: ${result.insertedId}`);
}

async function insereNelemento() {
  const karts = db.collection(myCollection);
  const documents = [
    { nomePiloto: "Thiago Quintas", numPiloto: "43",posicao: "3",categoria: "Moto"},
    { nomePiloto: "Roberto Bolanhos", numPiloto: "21",posicao: "4",categoria: "Carro"},
  ];
  const result = await karts.insertMany(documents);
  let ids = result.insertedIds;
  for (let id of Object.values(ids)) {
    console.log(`Corredor Inserido: ${id}`);
  }
}

async function selecionarValores() {
  const pizzas = await db.collection(myCollection).find().toArray();
  return pizzas;
}

async function editarValor(nomePilotoA,nomePiloto,numPiloto,posicao,categoria) {
  const pizzas = db.collection(myCollection);
  const filtro = { nomePiloto: nomePilotoA };
  const update = { $set: { nomePiloto: nomePiloto, numPiloto: numPiloto,posicao: posicao,categoria: categoria } };
  await pizzas.updateOne(filtro, update);
  //selecionarValores();
}

async function deleteValor(nomePiloto) {
  const registrados = db.collection(myCollection);
  //const pizza = await pizzas.findOne(); exclui a primeira da lista
  //pizzas.deleteOne(pizza);
  registrados.findOneAndDelete({ nomePiloto: nomePiloto });
  //selecionarValores();
}

app.post("/usuarios", (req, res) => {
  const { usuario, senha } = req.body;
  insere1elemento(usuario, senha);
  res.json("Inserido!");
});

app.delete("/usuarios", (req, res) => {
  const { usuario } = req.body;
  deleteValor(usuario);
  res.json("Deletado!");
});

app.put("/usuarios", (req, res) => {
  const { usuario, senha } = req.body;
  editarValor(usuario, senha);
  res.json("Editado!");
});

app.get("/usuarios", async (request, response) => {
  console.log("Buscando resultado");
  const query = await selecionarValores();
  console.log("Query executada com sucesso!");
  return response.json(query);
});

app.listen(3001, () => {
  console.log("Servidor online na porta 3001");
});
