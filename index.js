const colorCard = document.querySelector('.color-card');
const colorNumber = document.querySelector('.color-number');
const botton = document.querySelector('.button');
const main = document.querySelector('.main');
const header = document.querySelector('.header');

const color2 = () => {

  const r = Math.floor(Math.random() *256);
  const g = Math.floor(Math.random() *256);
  const b = Math.floor(Math.random() *256);

  const rgbColor = `rgb(${r},${g},${b})`;

  return rgbColor;

  // console.log(rgbColor);
};

const color3 = () => {

  const r = Math.floor(Math.random() *256);
  const g = Math.floor(Math.random() *256);
  const b = Math.floor(Math.random() *256);

  const rgbColor = `rgb(${r},${g},${b})`;

  return rgbColor;

  // console.log(rgbColor);
};



const color1 = () => {

  const r = Math.floor(Math.random() *256);
  const g = Math.floor(Math.random() *256);
  const b = Math.floor(Math.random() *256);

  const rgbColor = `rgb(${r},${g},${b})`;

  return rgbColor;

  // console.log(rgbColor);
};

const setBackground = () => {

  const colorcito1 = color1();
  const colorcito = color2();
  const colorcito3 = color3();

  header.style.backgroundColor = colorcito;

  colorNumber.innerHTML = colorcito1;
  main.style.backgroundColor = colorcito1;
  colorCard.style.backgroundColor = colorcito1;
};

botton.addEventListener("click", setBackground);



//  aqui empiezo a hacer llamado a api-------------------

 const API_URL = "https://jsonplaceholder.typicode.com";


 const HTMLResponse = document.querySelector('#app');

 const ul = document.createElement('ul');

 fetch(`${API_URL}/users`)
  .then((response) => response.json())
 .then((users) => {


   users.forEach(user => {

    let elem = document.createElement('li');

     elem.appendChild(
       document.createTextNode(`${user.name[0]} - ${user.email[0]}`)
       );
        
        ul.appendChild(elem);
   });


 HTMLResponse.appendChild(ul);

const tpl = users.map((user) => `<$>${user.name} - ${user.email}</$>`)

   HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;

  } );



//  const xhr = new XMLHttpRequest();

//  function onRequestHandler() {

// if (this.readyState === 4 && this.status === 200)
//    {
//     //  0 = UNSET, no se ha llamado el metodo open.
// // 1 = OPENED, se ha llamado el metodo open.
// // 2 = HEADERS_RECEIVED, se esta llamando el metodo send().
// // 3 = LOADING, está cargando, es decir, esta recibiendo la respuesta.
// // //      4 = Done, se ha completado la operacion.
// // //   const data = JSON.parse(this.response);

//  console.log(data);
//   const HTMLResponse = document.querySelector('#app');

//    const tpl = data.map((user) => `<li>${user.name} - ${user.email}</li>`);


//    // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;

// //  }
// //  }


// //  xhr.addEventListener('load', onRequestHandler);

// //  xhr.open('GET', `${API_URL}/users`);
// //  xhr.send();
