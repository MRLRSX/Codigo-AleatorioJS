const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
  });

  const chaveDoObjetos =  Object.keys(cliente);
  console.log(chaveDoObjetos);
  
  if(!chaveDoObjetos.includes("enderecos")){
    console.error("Erro. Enecessário ter um endereço cadastrado ");
  }