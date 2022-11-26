import db from "../databases/mongodb.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { authCadastroSchema, authLoginSchema } from "../schemas/authSchema.js";

export async function loginUser(req, res) {
  try {
    const user = req.body;
    const validate = authLoginSchema.validate(user);
    if (validate.error) {
     const errors=  validate.error.details.forEach((error) => {
       error.message;
     });
     res.status(422).send(errors);
    }
    const checkUser = await db
      .collection("users")
      .findOne({ email: user.email });

    if (!checkUser) {
      return res.status(422).send("Email ou senha inválidos");
    }
    const decryptedPassword = bcrypt.compareSync(
      user.password,
      checkUser.password
    );
    if (!decryptedPassword) {
      return res.status(422).send("Email ou senha inválidos");
    }
    const isToken = await db.collection("sessions").findOne({userId: checkUser._id});
    if(isToken) {
      return res.send({token: isToken.token});
    }
    const token = uuid();
    await db
      .collection("sessions")
      .insertOne({ token, userId: checkUser._id });
    return res.status(200).send({ token, name: checkUser.name });
  } catch (error) {
    console.error("Erro ao logar o usuário");
    res.status(500).send("Erro ao logar o usuário");
  }
}

export async function createUser(req, res) {
  try {
    const newUser = req.body;
    const validate = authCadastroSchema.validate(newUser);

    if (validate.error) {
      const errors = validate.error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
      
     const user = await db.collection("users").findOne({email: newUser.email});
     console.log(user);
     if(user) {
       res.status(422).send("Email já cadastrado");
      return;
      };
    const passwordHash = bcrypt.hashSync(newUser.password, 10);
    await db.collection("users").insertOne({
      name: newUser.name,
      email: newUser.email,
      tel: newUser.tel,
      cpf: newUser.cpf,
      dateBirth: newUser.dateBirth,
      adress: newUser.adress,
      password: passwordHash,

    });
    res.status(200).send("cadastrou");
  } catch (error) {
    console.error("Erro ao cadastrar o usuário");
    res.status(500).send("Erro ao cadastrar o usuário");
  }
}
