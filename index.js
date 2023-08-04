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