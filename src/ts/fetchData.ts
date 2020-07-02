const getBtn = document.getElementById('searchBtn');
let resultObj;

// tslint:disable-next-line:typedef
async function getData() {
  const response = await fetch('https://api.github.com/search/repositories?q=angular');
  const data = await response.json();
  return data;
}

/*const sendData = () => {
}*/

// tslint:disable-next-line:only-arrow-functions
getBtn.addEventListener('click', () => {
  getData().then(data => resultObj = data)
    .then(data => console.log(data));
}, false);
