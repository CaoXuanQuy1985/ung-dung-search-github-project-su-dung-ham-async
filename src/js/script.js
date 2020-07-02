const getBtn = document.getElementById("searchBtn");
let resultObj;

async function getData() {
  let response = await fetch('https://api.github.com/search/repositories?q=angular');
  let data = await response.json();
  return data;
}

const sendData = () => {
}

getBtn.addEventListener("click", function(){
  getData().then(data => resultObj = data)
    .then(data => console.log(data));
}, false);
