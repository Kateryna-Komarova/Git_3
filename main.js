const resultOfFetch = fetch('https://jsonplaceholder.typicode.com/posts/');
// console.log(resultOfFetch);
// console.log('Мы сделали fetch запрос');

resultOfFetch
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((bodyOfResponse) => {
    renderFirst10(bodyOfResponse);
  });

resultOfFetch.catch((error) => {
  console.log('Здесь ошибка', error);
});

resultOfFetch.finally(()=> {
    console.log('Finally, в конце выполняется')
});

console.log('Программа работает дальше');