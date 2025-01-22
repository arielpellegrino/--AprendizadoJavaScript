//Switch
let dia = "";
let diaSemana = "3";


switch (diaSemana)  {
    case 0: 
        dia = "segunda";
        break
    case 1:
        dia = "terça";
        break
    case 2:
        dia = "quarta";
        break
    case 3:
        dia = "quinta";
        break
    case 4:
        dia = "sexta";
        break
    case 6:
        dia = "sabado";
        break
    case 7:
        dia = "domingo";
        break
    default:
        dia = " -- ";

}

console.log(`hoje é ${dia}`);