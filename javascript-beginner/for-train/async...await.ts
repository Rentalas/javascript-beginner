// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }

//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

async function loadJson1(url: string): Promise<unknown> {
    const response = await fetch(url);

    if (response.status !== 200) {
        throw new Error(`${response.status}`);
    }
    return await response.json();
}


class HttpError extends Error {
    response;

    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
export async function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");
    let response = await loadJson(`https://api.github.com/users/${name}`);

    if (response instanceof Error) {
        if (response instanceof HttpError && response.response.status === 404) {
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");

            while (true) {
                name = prompt("Введите логин?", "iliakan");
                response = await loadJson(`https://api.github.com/users/${name}`);

                if (response instanceof Error) {
                    if (response instanceof HttpError && response.response.status === 404) {
                        continue;
                    }

                    throw response;
                }

                alert(`Полное имя: ${response.name}.`);
                return response;
            }
        }

        throw response;
    }

    alert(`Полное имя: ${response.name}.`);
    return response;
}

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    wait().then(console.log);
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
  }


