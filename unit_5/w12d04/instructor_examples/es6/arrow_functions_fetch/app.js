console.log('ES6 fetch');

// fetch('https://api.github.com/users/singular000/repos')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(json) {
//     console.log(json)
//   })
//   .catch(function(err) {
//     console.log(err)
//   });

fetch('https://api.github.com/users/singular000/repos')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));


const someFunc = () => {
  return 'hi'
}



