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
