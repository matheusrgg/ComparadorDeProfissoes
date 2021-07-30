// const array = [
//   "quero", "só", "vê"
// ]
// slipArrayFront(array)
// function slipArrayFront(array) {

//   const vai = array.map(palavra => {
//     const words = palavra.split(",")
//     // return words
//     console.log(words);
//   });

//   console.log(vai);
// }

export function splitStringArrayFront(arrayClient) {

  const vai = arrayClient.map(string => {
    return string.split(",")

  });

  return vai;
}

export function splitWord(arrays) {
  // cons/ole.log(arrays);
  const vai = arrays.map(palavra => {
    return palavra[0].split(" ")
    // console.log("ei", palavra);
  })
  console.log("a primeira", vai);

  const arraycomprofissoes = []
  const dobro = vai.map(palavra => {

    if (palavra.length > 1) {

      const teste = palavra.map(s => {
        const st = s.split(" ")
        arraycomprofissoes.push(st)
      })
      console.log('object', teste);
    } else {
      const unicapalavra = palavra
      arraycomprofissoes.push(unicapalavra)
      console.log("uma palavra", unicapalavra);
    }
  })
  console.log("cadeeee", arraycomprofissoes);
  return arraycomprofissoes;
}
