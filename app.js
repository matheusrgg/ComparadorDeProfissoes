



function letraMinusculaFront() {
  const occupationFront = [
    {
      occupation: "Não informado",
    },
    {
      occupation: "ACOUGUEIRO",
    },
    {
      occupation: "ADESTRADOR DE CÃES",
    }
  ]
  const formatoCertoBidu = []
  const occ = occupationFront.map(profissao => {

    return profissao.occupation.toLowerCase()
  })

  formatoCertoBidu.push(occ)

  return formatoCertoBidu
}


function letraMinusculaClient() {

  const occupationClient = [
    {
      "codigo": "131115006",
      "descricao": "Gerente de divisão de pesquisas e análise"
    },
    {
      "codigo": "131115007",
      "descricao": "Gerente de ong (organização não-governamental)"
    },
    {
      "codigo": "623005001",
      "descricao": "Adestrador de animais"
    }
  ]

  const occ = occupationClient.map(profissao => {
    return profissao.descricao.toLowerCase();
  })
  return occ;
}
