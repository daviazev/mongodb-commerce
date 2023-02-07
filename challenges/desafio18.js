// prettier-ignore
db.produtos.updateMany(
  {
    nome: { $in: ["Big Mac", "Quarteirão com Queijo"] },
  },
  {
    $push: { ingredientes: "bacon" },
  },
);
// prettier-ignore
db.produtos.find(
  {},
  {
    nome: 1,
    ingredientes: 1,
    _id: 0,
  },
);
