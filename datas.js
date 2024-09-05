// Gera um Date que é o tempo de agora
let horaAtual = new Date();
let horaDepois = new Date();

//getMonth começa em 0- janeiro..... 11- dezembro

// Trabalhar com operações matematicas
horaAtual.setMonth(horaAtual.getMonth() + 1);
horaAtual.setDate(horaAtual.getDate() + 3);

// Comparação entre datas
if (horaAtual > horaDepois) {
  console.log(horaAtual, horaDepois);
}
//-----------------------------------------------------------------------------

//calculado em milesegundos
let diferencaEmMs = horaAtual - horaDepois;
let diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);

// 1000: Há 1000 milissegundos em um segundo.
// 60: Há 60 segundos em um minuto.
// 60: Há 60 minutos em uma hora.
// 24: Há 24 horas em um dia.

console.log(`Diferença em dias: ${diferencaEmDias}`);

//-----------------------------------------------------------------------------

// Horário válido
let horarioValido = new Date("2022-10-23 10:45:53.123");

// Horário inválido
let horarioInformado = new Date("asdasdasdasdasdads");

// validação de um horário
if (!isNaN(horarioInformado.valueOf())) {
  console.log("É um horario");
} else {
  console.log("Não é um horario");
}

console.log(horarioInformado);

//-----------------------------------------------------------------------------
let hora_atual_data_mes = new Date();

let diaSemana = hora_atual_data_mes.getDay();
//0-Domingo .... 6-Sabado
if (diaSemana === 6 || diaSemana === 0) {
  console.log("É final de semana");
} else {
  console.log("É dia de semana");
}
console.log(`Hora completa: ${hora_atual_data_mes}`);

console.log(`Dia: ${hora_atual_data_mes.getDate()}`);
console.log(`Mês: ${hora_atual_data_mes.getMonth() + 1}`); // Janeiro é 0, por isso adicionar +1
console.log(`Ano: ${hora_atual_data_mes.getFullYear()}`);


//-----------------------------------------------------------------------------

//Formatação de data (exemplo de data no formato dd/mm/yyyy)
// let data_formatada = new Date();
let data_formatada = new Date("2022-10-23 10:45:53.123");

let dia = data_formatada.getDate().toString().padStart(2, '0');
let mes = (data_formatada.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
let ano = data_formatada.getFullYear();

console.log(`Data formatada: ${dia}/${mes}/${ano}`);

//-----------------------------------------------------------------------------

const now = new Date();

const data_sem_hora = new Date(now).toISOString().split("T")[0];

const hora = new Date(now).toISOString().split("T")[1];
now.toISOString().split("T")[1];

console.log(now, data_sem_hora);
console.log(hora);
