db.produtos.updateMany({
  $nor: [{ nome: "McChicken" }],
}, { $addToSet: { ingredientes: "ketchup" } });

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });