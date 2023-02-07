// prettier-ignore
db.produtos.updateMany(
  {},
  {
    $set: { avaliacao: NumberInt(0) },
  },
);

// prettier-ignore
db.produtos.updateMany(
  {
    tags: { $elemMatch: { $eq: "bovino" } },
  },
  {
    $inc: { avaliacao: 5 },
  },
);

// prettier-ignore
db.produtos.updateMany(
  {
    tags: { $elemMatch: { $eq: "ave" } },
  },
  {
    $inc: { avaliacao: 3 },
  },
);

// prettier-ignore
db.produtos.find(
  {},
  {
    nome: 1,
    avaliacao: 1,
    _id: 0,
  },
);
