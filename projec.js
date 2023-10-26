let heroi = {

    nome: "Henrique",
    idade: "27",
    tipo: "monge"
};
    let tipo = heroi.tipo;

    if (tipo == "mago") {
      ataque = "magia";
    } else if (tipo == "guerreiro") {
      ataque = "espada";
    } else if (tipo == "monge") {
      ataque = "artes marciais"; 
    } else if (tipo == "ninja") {
      ataque = "shuriken";
    } else {
      console.log("Tipo de herói inválido");
    }; 
  
    console.log(`O ${heroi.tipo} atacou usando ${ataque}.`)