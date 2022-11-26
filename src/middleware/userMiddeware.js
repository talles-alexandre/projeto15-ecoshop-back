import db from "../databases/mongodb.js";

export async function userMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const isToken = authorization?.replace("Bearer ", "");
  console.log(isToken.toString());
  if (!isToken) {
    res.status(401).send("token não existe");
    return;
  }

  try {
    const session = await db.collection("sessions").findOne({token: isToken});
    console.log(session);
    if (!session) {
      res.status(401).send("sessâo não existe.");
      return;
    }

    const user = await db.collection("users").findOne({ _id: session.userId });

    if (!user) return res.status(401).send(" usuario não existe.");

    res.locals.user = user;

    next();
  } catch (error) {
    console.log("Erro ao tentar obter usuário através da sessão");
    console.log(error);
    return res.sendStatus(500);
  }
}

