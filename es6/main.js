class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TotoList extends List {
  constructor() {
    super();
    this.usuario = 'Diego';
  }

  mostraUsuario(){
    console.log(this.usuario);
  }
}

const MinhaLista = new TotoList();

document.querySelector('#novotodo').onclick = function () {
  MinhaLista.add('Novo Todo');
};

MinhaLista.mostraUsuario();


//REST operator, resto das propriedades
const usuario = {
  nome:'Diego',
  idade: 23,
  empresa:'Rocketseat'
};

const {nome, ...resto} = usuario; //desestruturação + rest operator(...)
console.log(nome);
console.log(resto);
