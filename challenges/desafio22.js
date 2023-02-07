// prettier-ignore
db.produtos.updateMany(
  {},
  {
    $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
  },
);

// prettier-ignore
db.produtos.updateOne(
  {
    nome: "Big Mac",
  },
  {
    $inc: { "vendasPorDia.3": 60 },
  },
);

// prettier-ignore
db.produtos.updateMany(
  {
    tags: { $elemMatch: { $eq: "bovino" } },
  },
  {
    $inc: { "vendasPorDia.6": 120 },
  },
);

// prettier-ignore
db.produtos.find(
  {},
  {
    nome: 1,
    vendasPorDia: 1,
    _id: 0,
  },
);
