// prettier-ignore
db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: 5,
});

// prettier-ignore
db.resumoProdutos.find(
  {},
  {
    _id: 0,
  },
);
