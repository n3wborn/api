const mybtn = document.getElementById('btn');
const resPre = document.getElementById('result');

// fonction servant à fecth les données recupérées sur endpoint
function fetchApi(endpoint){

  // on créé les headers appropriés
  let myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  let myInit = {headers : myHeaders}

  let response = '';
  let json = '';

  // fetch
  window.fetch(endpoint, myInit)
  .then(response => response.json())
  .then(json => console.log(json))
}


// showRes va remplir l'element target de datas
function showRes(target,datas) {
  // on vide le contenu de target
  target.innerText = datas;
}


mybtn.addEventListener('click', function(){
  let res = fetchApi('https://jsonplaceholder.typicode.com/todos/1');
});





// test de fetchApi sur jsonplaceholder
// let res = fetchApi('https://jsonplaceholder.typicode.com/todos/1');
