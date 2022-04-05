db.produtos.find({
  nome: "Big Mac" },
  {
    _id: false,
    nome: true,
    vendidos: true,
  })
  .sort({
    vendidos: -1,
});