import db from "../databases/mongodb.js";

export async function envProducts(req, res) {
    user = res.locals.user;
  try {
    console.log(token)
    const products = await db.collection("products").find({}).toArray();
    res.send({products, user});
  } catch (error) {
    console.error("Erro ao obter produtos");
    res.sendStatus(500);
  }
}
export async function envRequests(req, res) {
    user = res.locals.user;

  try {
    const requests = await db.collection("requests").find({userId: user._id}).toArray();
    res.send({requests});
  } catch (error) {
    console.error("Erro ao obter produtos");
    res.sendStatus(500);
  }
}

export async function processPayment(req, res) {
    user = res.locals.user;
  try {
    const { products } = req.body;
    const newRequest = {
      userId: user._id,
      products,
      totalPrice,
      status: "Em processamento",
    };
    await db.collection("requests").insertOne(newRequest);
    res.sendStatus(200);
  } catch (error) {
    console.error("Erro ao processar pagamento");
    res.sendStatus(500);
  }
}