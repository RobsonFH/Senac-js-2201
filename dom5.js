//elementos unicos

/*
console.log(document.querySelector('li:last-child').innerText);

console.log(document.querySelector('li:first-child').innerText);

console.log(document.querySelector('li:nth-child(2)').innerText);

console.log(document.querySelector('li:last-child(3)').innerText);
*/


//elementos multiplos

/*
console.log(document.getElementsByClassName('collection-item'));

const itens = document.getElementsByClassName('collection-item');

itens[1].style.color = 'red';

*/



//OU
/*

const itens = document.querySelector('ul').getElementsByClassName('collection-item');

item[3].style.color = 'green';

*/

//ou

//const itens = document.getElementsByClassName('li');
//itens[1].style.color = 'blue';



//indice com nome de cada um em formato de lista


/*
const itens = document.getElementsByTagName('li');

let itensArray = Array.from(itens);

itensArray.forEach(function(li, indice){

    console.log(indice + ':' + li.innerText);
});

*/


// impar e par odd (impar) even (par) :)

let itensImpares = document.querySelectorAll('li:nth-child(odd)');



let mudaCor = Array.from(itensImpares);
mudaCor.forEach(function(item){
    item.style.backround = '#dedede';


});


console.log(itensImpares);



