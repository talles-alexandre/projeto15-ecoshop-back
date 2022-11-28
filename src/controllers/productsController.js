import db from "../databases/mongodb.js";

export async function envProducts(req, res) {
    
  try {
    const products = await db.collection("products").find({}).toArray();
    res.send({products});
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
    if (!user) return res.send("voce precisa estar logado para comprar");
  try {
    const { products } = req.body;
    const newRequest = {
      userId: user._id,
      products,
      totalPrice,
      status: "pedido recebido",
    };
    await db.collection("requests").insertOne(newRequest);
    res.sendStatus(200);
  } catch (error) {
    console.error("Erro ao processar pagamento");
    res.sendStatus(500);
  }
}