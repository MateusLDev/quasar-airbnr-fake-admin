export const hostingDescription =
  'Essa linda e espaçosa casa pé na areia em Angra dos Reis fica no condominio Caieirinha, seguranças rodando a area 24 horas entre terra e mar, trazendo conforto e segurança para sua familia. <br /><br /> Do lado de fora você irá encontrar a piscina a poucos passos da areia da praia, com espreguiçadeiras e área gourmet totalmente equipada, com churrasqueira e mesa para 12 pessoas. Logo ao lado, você encontra a sauna e um espaço fitness climatizado, para relaxar e treinar com 100% de privacidade. <br /> <br /> O interior da casa é decorado de forma excepcional, com muito conforto e harmonia. Duas amplas salas de estar perfeitamente mobiliadas te esperam, com TV à cabo, Home Theater e sistema de som ambiente. Todos os cômodos proporcionam vistas incríveis de diversos ângulos para o mar e para a flora da região. <br /><br />As salas de estar são climatizadas, assim como todas as suítes';

export function setToken() {
  localStorage.setItem(
    'token',
    '40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8'
  );
}

export function getToken() {
  return localStorage.getItem('token');
}
