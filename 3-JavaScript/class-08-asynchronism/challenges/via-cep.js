// Retorne a cidade, bairro e estado de um determinado CEP que o usuário passar pela API via cep

const API = "https://viacep.com.br/ws/63530000/json/";

async function fetchCEP() {
  const res = await fetch(API);
  const data = await res.json();
  return data;
}

(async function () {
  const data = await fetchCEP();
  console.log(data.uf);
  console.log(data.localidade);
})();
