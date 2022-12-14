import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(productsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`"Servidor iniciado na porta ${PORT}!!!"`);
});

// {
//   "name": "gus",
//   "email": "gus@gmail.com",
//   "tel": "65996506397",
//   "cpf": 07786047131,
//   "dateBirth": "25/05/1997",
//   "adress": {
//     "street": "rua aracua",
//    "number": 286,
//     "complement": "nao",
//     "cep": 88040310
//   },
//   "password": "123456",
//   "repeatPassword": "123456"
  
// }