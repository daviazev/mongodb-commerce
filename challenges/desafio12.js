// prettier-ignore
db.produtos.updateMany(
  {
    nome: { $ne: "McChicken" },
  },
  {
    $addToSet: {
      ingredientes: {
        $each: ["ketchup"],
      },
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
