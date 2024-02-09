const API = "https://api.github.com/users/AmiltonLucas";

const userGitHub = fetch(API)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Fim da requisão!!!"));

console.log(userGitHub);
