function ex1ObjetoEndereco(obj) {
  return 'O usuário mora em ' + obj.cidade + '/' + obj.uf +
    ', no bairro ' + obj.bairro + ', na ' + obj.rua +
    ' com o nº ' + obj.numero + '.'
}

var endereco = {
  rua: "Rua Monte Libano",
  numero: 946,
  bairro: "Mondubim",
  cidade: "Fortaleza",
  uf: "CE"
};

console.log(ex1ObjetoEndereco(endereco));


function ex2Pares(x, y) {
  for (x; x <= y; x++) {
    if (x % 2 === 0) console.log(x);
  }
}
ex2Pares(32, 321);

function ex3temHabilidade(skills) {
  var exist = skills.indexOf('Javascript');
  if (exist > 0) {
    return true;
  } else {
    return false;
  }
}

var skills = ['ReactJS', 'React Native', 'Javascript'];
console.log(ex3temHabilidade(skills));

function ex4Experiencia(anos) {
  if (anos <= 1) {
    return 'Iniciante';
  } else if (anos > 1 && anos <= 3) {
    return 'Intermediário';
  } else if (anos > 3 && anos <= 6) {
    return 'Avançado';
  } else {
    return 'Jedi Master';
  }
}
var anosEstudo = 4;
console.log(ex4Experiencia(anosEstudo));

function ex5PrintSkills(usuarios) {
  for (usuario of usuarios) {
    console.log('O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(', '));
  }
}

var usuarios = [
  {
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJS', 'Redux']
  },
  {
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
  }
];

ex5PrintSkills(usuarios);

var divElement = document.querySelector('#quadradros');
var btnQuadrado = document.querySelector('#btn_cria_quadrado');
btnQuadrado.onclick = exCriaQuadrado;
function exCriaQuadrado() {
  var quadrado = document.createElement('div');
  quadrado.style.width = '100px';
  quadrado.style.height = '100px';
  quadrado.style.backgroundColor = '#f00';

  //exercicio2
  quadrado.onmouseover = function () {
    var newColor = getRandomColor();
    quadrado.style.backgroundColor = newColor;
  }

  divElement.appendChild(quadrado);
  var br = document.createElement('br');
  divElement.appendChild(br);
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//var newColor = getRandomColor(); // #E943F0

var listaNomesElement = document.querySelector('#lista_nomes');

var nomes = ["Diego", "Gabriel", "Lucas", "Jéssica"];

function preencheLista() {
  listaNomesElement.innerHTML='';
  var listElement = document.createElement('ul');
  for (nome of nomes) {
    var itemListElement = document.createElement('li');
    var textElement = document.createTextNode(nome);
    itemListElement.appendChild(textElement);
    listElement.appendChild(itemListElement);
  }
  listaNomesElement.appendChild(listElement);
}
preencheLista();
var inputName = document.querySelector('#name');
var btnAddName = document.querySelector('#btn_add_nome');
btnAddName.onclick = addNomeLista;

function addNomeLista() {
  var nome = inputName.value;
  inputName.value = '';
  nomes.push(nome);
  preencheLista();
}

function chechaIdade(idade) {
  setTimeout(null, 2000);
  return new Promise(function (resolve, reject) {
    if (idade >= 18) {
      resolve();
    } else {
      reject();
    }
  });
}

chechaIdade(20)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });

var buttonElement = document.querySelector('#btn_add_repo');
buttonElement.onclick = getRepo;

var listElement = document.querySelector('#repos ul');
var inputElement = document.querySelector('#user');

function getRepo() {
  loadingMessage();
  var user = inputElement.value;
  axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function (response) {
      console.log(response);
      renderRepos(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function loadingMessage(){
  listElement.innerHTML='';
  var itemTemp = document.createElement('li');
  var textLoading = document.createTextNode('Carregando...');
  itemTemp.appendChild(textLoading);
  listElement.appendChild(itemTemp);
}

function renderRepos(repos) {
  listElement.innerHTML='';
  for (repo of repos) {
    var repoElement = document.createElement('li');
    var repoText = document.createTextNode(repo.name);

    repoElement.appendChild(repoText);
    listElement.appendChild(repoElement);
  }
}
