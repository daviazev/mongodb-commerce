// prettier-ignore
db.produtos.updateOne(
    {
      nome: "Cheddar McMelt",
    },
    {
      $pop: { ingredientes: 1 },
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
