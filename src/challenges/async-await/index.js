import axios from "axios";

// Transforming old Promises into Async/Await

// 1-1
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export function onePerSecond() {
  delay().then(() => {
    console.log("1s");

    delay().then(() => {
      console.log("2s");

      delay().then(() => {
        console.log("3s");
      });
    });
  });
}

export async function asyncOnePerSecond() {
  await delay(console.log("1s"));
  await delay(console.log("2s"));
  await delay(console.log("3s"));
}

// 1-2
export function getUserFromGithub(user = "thiagojacinto") {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log("User not found.");
    });
}

export const asyncGetUserFromGithub = async (user = "thiagojacinto") => {
  let response = await axios.get(`https://api.github.com/users/${user}`);
  console.log(response.data);
};

// 1-3
export class Github {
  static getRepositories(repo = "thiagojacinto/es6-review") {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then((response) => {
        console.log(response.data.description);
      })
      .catch((err) => console.warn("Repository not found."));
  }

  static async asyncGetRepositories(repo = "thiagojacinto/es6-review") {
    const response = await axios
      .get(`https://api.github.com/repos/${repo}`)
      .catch((err) => console.warn("Repository not found."));
    console.log(response.data.description);
  }
}

// 1-4
export const buscaUsuario = (usuario = "thiagojacinto") => {
  axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => console.log(response.data))
    .catch(err => console.warn("User not found."));
}

export const asyncBuscaUsuario = async (usuario = "thiagojacinto") => {
  const res = await axios.get(`https://api.github.com/users/${usuario}`);
  console.log(res.data);
}