import { letraMinusculaFront } from "./letraminucuka.js"
import {
  splitStringArrayFront,
  splitWord
} from "./splitArray.js";





const occupationsFront = [
  {
    occupation: "Não informado",
  },
  {
    occupation: "ACOUGUEIRO",
  },
  {
    occupation: "ADESTRADOR DE CÃES",
  },
  {
    occupation: "ADM EMPRESA CHEFE ALMOXARIFADO",
  },
  {
    occupation: "ADM EMPRESAS - COM. EXTERIOR",
  },
  {
    occupation: "ADM EMPRESAS - MARKETING",
  },
  {
    occupation: "ADM EMPRESAS ELETRO ELETRONICO",
  }

]
//letrs minuscula

const letraMinusculaFrontVai = letraMinusculaFront(occupationsFront);
const slipArrayFrontVai = splitStringArrayFront(letraMinusculaFrontVai);
const splitWordVai = splitWord(slipArrayFrontVai)
console.log("seraa", splitWordVai);