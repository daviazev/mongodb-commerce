// prettier-ignore
db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

// prettier-ignore
db.produtos.find(
  {},
  {
    nome: 1,
    valoresNutricionais: 1,
    _id: 0,
  },
);
