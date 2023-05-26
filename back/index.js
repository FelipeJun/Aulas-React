const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

async function insereElemento(nomePiloto,numPiloto,posicao,categoria) {
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
  const pilotos = await db.collection(myCollection).find().toArray();
  return pilotos;
}
async function editaElemento(_id, nomePiloto, numPiloto, posicao, categoria){
  const pilotos = db.collection(myCollection);
  const filtro = { _id: new ObjectId(_id)};
  const update = { $set: { nomePiloto: nomePiloto, numPiloto: numPiloto, posicao: posicao, categoria: categoria } };
  await pilotos.updateOne(filtro, update);

}

async function deletaElemento(nomePiloto) {
  const registrados = db.collection(myCollection);
  registrados.findOneAndDelete({ nomePiloto: nomePiloto });
}


app.post("/pilotos", (req, res) => {
  const { nomePiloto,numPiloto,posicao,categoria } = req.body;
  insereElemento(nomePiloto,numPiloto,posicao,categoria);
  res.json("Inserido!");
});

app.delete("/pilotos", (req, res) => {
  const { nomePiloto } = req.body;
  deletaElemento(nomePiloto);
  res.json("Deletado!");
});


app.get("/pilotos", async (req, res) => {
  console.log("Buscando resultado");
  const query = await selecionarValores();
  console.log("Query executada com sucesso!");
  return res.json(query);
});


app.put("/pilotos", (req, res) => {
  console.log(req.body)
  const {_id, nomePiloto, numPiloto, posicao, categoria} = req.body;
    editaElemento(_id, nomePiloto, numPiloto, posicao, categoria);
    res.json("Editado");
});

app.listen(3001, () => {
  console.log("Servidor online na porta 3001");
});
