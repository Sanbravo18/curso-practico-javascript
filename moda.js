const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];

  const lista1Count = {};

  lista1.map( //se convierte  el array en un objeto
      function (elemento){
          if (lista1Count[elemento]){
              lista1Count[elemento] += 1; 
          }
          else{
            lista1Count[elemento] = 1;
          }
      }
  );

  const list1Array = Object.entries(lista1Count).sort( //se covierte el objeto en arrays
      function(elementoA,elementoB){
        return elementoA[1] - elementoB[1];
      }
  );
  
  const moda = list1Array[list1Array.length - 1];