// prettier-ignore
db.produtos.updateMany(
  {},
  {
    $pull: {
      ingredientes: "cebola",
    },
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
