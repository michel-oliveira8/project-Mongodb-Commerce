db.produtos.updateMany({}, {
  $push: {
    valoresNutricionais: {
      $each: [],
      $slice: 3,
  }}})

db.produtos.find({ingredientes: "picles"},{
   _id:false, nome:true, ingredientes:true, valoresNutricionais:true
});