// prettier-ignore
db.produtos.updateOne(
  {
    nome: "Big Mac",
  },
  {
    $unset: { curtidas: "" },
  },
);

// prettier-ignore
db.produtos.find(
  {},
  {
    nome: 1,
    curtidas: 1,
    _id: 0,
  },
);
