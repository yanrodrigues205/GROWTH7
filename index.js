const trabalhos = [
	{ 
		"ID": 1,
		"Descrição": "Importação de arquivos de fundos", 
		"Data Máxima de conclusão": '2021-02-04 12:00:00', 
		"Tempo estimado": '8 horas'
	},
	{ 
		"ID": 2,
		"Descrição": 'Importação de dados da Base Legada', 
		"Data Máxima de conclusão": '2021-02-04 12:00:00', 
		"Tempo estimado": '4 horas'
	},
	{ 
		"ID": 3,
		"Descrição": 'Importação de dados', 
		"Data Máxima de conclusão": '2021-02-02 12:00:00', 
		"Tempo estimado": '6 horas'
	},
	{ 
		"ID": 4,
		"Descrição": 'Desenvolver historia 745', 
		"Data Máxima de conclusão": '2021-02-02 12:00:00', 
		"Tempo estimado": '2 horas'
	},
	{ 
		"ID": 5,
		"Descrição": 'Gerar QRCode', 
		"Data Máxima de conclusão": '2020-02-15 12:00:00', 
		"Tempo estimado": '6 horas'
	},
	{
		"ID": 6,
		"Descrição": 'Importação de dados de integração', 
		"Data Máxima de conclusão": '2020-02-15 12:00:00', 
		"Tempo estimado": '8 horas'
	},
];

function ordena_data_maxima(trabalhos)
{
    return trabalhos.sort((a, b) =>
      new Date(a["Data Máxima de conclusão"]) - new Date(b["Data Máxima de conclusão"])
    );
}


function ordenar_trabalhos(trabalhos) {
    const trabalhos_array = [];
    let trabalhos_subarray = [];
    let duracao = 0;
  
    for (const trabalho of trabalhos) {
      const tempo_estimado = parseInt(trabalho["Tempo estimado"]);
  
      if (duracao + tempo_estimado <= 8) 
      {
        trabalhos_subarray.push(trabalho);
        duracao += tempo_estimado;
      } 
      else 
      {
        trabalhos_array.push(trabalhos_subarray);
        trabalhos_subarray = [trabalho];
        duracao = tempo_estimado;
      }
    }
  
    if (trabalhos_subarray.length > 0)
    {
      trabalhos_array.push(trabalhos_subarray);
    }
  
    return trabalhos_array;
  }
  
  function main(trabalho)
  {

    const ordena_data = ordena_data_maxima(trabalho);
    const ordena_trabalho = ordenar_trabalhos(ordena_data);
    return ordena_trabalho;

  }

  const resposta = main(trabalhos);
  console.log(resposta);