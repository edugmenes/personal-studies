console.log(typeof Object);
console.log(typeof new Object); //como se fosse contrutor em java

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {}; 
console.log(typeof Produto);
console.log(typeof new Produto);

//objeto é instância da função, uma classe é uma função
//objeto é instância da classe