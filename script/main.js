// primeiro preciso emcapsular os códigos para ver se 
// em cada botao posso adicionar um evento diferente
//NAO RESOLVI NADA VOLTARDEPOIS 


let home = document.querySelector('#home');
let about = document.querySelector('#about');
let services = document.querySelector('#services')

function goToHome() {
  console.log('cliquei em ')
}

function goToAbout() {
  console.log('cliquei em about')
}

function goToServices() {
  console.log('cliquei em services')
}



// home.addEventListener('click', goToHome)

// about.addEventListener('click', goToAbout)

// services.addEventListener('click', goToservices)

home.onclick = goToHome;

about.onclick = goToAbout;

services.onclick = goToServices;
