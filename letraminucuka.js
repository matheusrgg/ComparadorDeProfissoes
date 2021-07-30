



export function letraMinusculaFront(payloadOccupationFront) {


  const occ = payloadOccupationFront.map(profissao => {
    return profissao.occupation.toLowerCase()
  })


  return occ
}

export function letraMinusculaClient(payloadOccupationClient) {


  const occ = payloadOccupationClient.map(profissao => {
    return profissao.descricao.toLowerCase();
  })


  return occ;
}
