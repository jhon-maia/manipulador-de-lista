var readlineSync=require('readline-sync');//criei uma variavel e usei o require para selecionar a bibilhoteca que permite entrada de dados do usuário 



var lista=['1','2','3','4','5'];//lista com 5 posições todos os números inteiros

var option=0;//a variavel de opção que o usuário vai usar para selecionar as opções

const telaDeSelecao=()=>{
console.log("qual operação você deseja realizar?");
console.log("1-adicionar um elemento no inicio na lista");
console.log("2-adicionar um elemento no final da lista");//console.log serve para printar algo no terminal
console.log("3-consultar a lista");
console.log("4-remover um elemento qualuer");
console.log("5-esvaziar a lista ");

var option  = readlineSync.question('selecione uma opcao:');
//readlineSync- nome da bibilhoteca || .question o metodo que faz pergunta pro usuário
console.log(option);
}

//
const adicionarElementoNoInicio=()=>{//pode se declarar função no javascript dessa forma:( tipoDeVariavel nomeDaFuncao=()=>{escrevendo a função})
	 var newElement=readlineSync.question("qual elemento voce quer adicionar na lista?:");
     lista=[newElement,...lista];
}

const adicionarElementoNoFinal=()=>{
	 var newElement=readlineSync.question("qual elemento voce quer adicionar na lista?:");
     lista=[...lista,newElement]; //a sintaxe spread ....lista permite alocar a lista em qualquer posição dentro da lista
 }

const consultarLista=()=>{
	lista.map(elementos=>{console.log(elementos);});//map percorre a lista e pode alterar os elementos
	
}

const removerDaLista=()=>{
	
	var removeElement=readlineSync.question("qual elemento voce quer remover na lista?:");
	lista=lista.filter(filter=>filter!==removeElement);//filtro pecorre a lista e baseado na condição põe somente os elementos que correspondem a ela
}

const esvaziarLista=()=>{

	lista=[];
}


adicionarElementoNoInicio();
adicionarElementoNoFinal();
removerDaLista();
esvaziarLista();
console.log(lista);
consultarLista();

