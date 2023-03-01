// let firstCard = 10;

// let secondCard = 4;

let cards = []; //array - ordered list of items

// let cards = [1,2,3,4,5,6,7,8,9,10,11,12];

//notation for create arrays []

let sum = 0;

let hasBlackJack = false; //dato boolean - true/false // esta variable me permite determinar si alguien hizo blackjack

let isAlive = false; //aca estoy declarando una variable y despues asignandola = true

let message = "";

let messageEl = document.getElementById("message-el");

// let sumEl = document.getElementById("sum-el");

let sumEl = document.querySelector("#sum-el");

let cardsEl = document.querySelector("#cards-el");

let player = { //creating an object
  name: "Boris", //no utilizamos el let para las variables - tampoco utilizamos el = sino : y separamos las mismas con , salvo la ultima.
  chips: 145,
  // sayHello: function () { //methods = functions inside objects
    // console.log ("Heisann!")
  // }
};

// player.sayHello();  //object.method




let playerEl = document.getElementById("player-el"); //method

playerEl.textContent = player.name + ": $" + player.chips; //accedemos a las propiedades de un objeto a traves de nombre objeto y . seguidod e cada propiedad = player.chips

//el query selector es una forma mas dinamica y especifica de seleccionar un elemento del html.
//en este caso al buscar un id tengo que utilizar el #, en el caso que sea una clase un .
// pregunto por un elemento a traves de un selector de css

function getRandomCard() {
  //cuando escribimos functions declarations, las mismas pueden ser utilizadas por cualquier otra variable, sin importar el orden en el que se encuentre.
  // By default, functions return undefined. To return any other value, the function must have a return statement that specifies the value to return.
  //The function declaration defines a function with the specified parameters.
  // return 5;
  // let randomNumber = Math.floor( Math.random() * 13 ) + 1 //creando variable
  // return randomNumber //creando variable
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

console.log(getRandomCard());

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  //function callback
}

function renderGame() {
  //render out firstCard and secondCard
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "; //agrego espacio al ciclo
  } //en vez de usar las variables de cada una de las cartas, utilizo las posiciones de las cartas que se encuentran dentro del array. Posicion [0] para llamar al primer item del array y posicion [1] para llamar al segundo item.
  //render out ALL the cards we have
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    //las expresiones que pasan en los condicionales solo se dividen en verdaderas o falsas es decir en booleans.
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    //estrictamente igual a 21.
    message = "Wohoo! You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame(); //function callback
  }
}

// IS ALIVE?

console.log(isAlive);

// CASH OUT!

console.log(hasBlackJack);

// utilizo el if como condicional para construir una estructura logica.

// el else if me sirve para agregar mas condiciones, en el caso de que haya mas de una posibilidad

// sino hay otra alternativa no es necesario utilizar el else if, con usar un else alcanza y tampoco tengo que definir la condicion, ya que es la ultima alternativa posible. Sino cumplo las otras dos condiciones entonces sucede esto.

// let age = 21;

// if (age <= 20) { //el operador menor o igual tambien considera el numero en cuestion.
//   console.log("You can not enter the club!");
// } else {
//   console.log("Welcome!");
// }

// let age = 100;

// if (age <= 99) {
//   console.log("Not elegible");
// } else if (age === 100) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   console.log("Not elegible, you have already gotten one");
// }

// == igual pero no el tipo de dato - si paso un string me va a resultar correcto.
// === estrictamente igual en tipo de dato y variable.

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   //  true
// console.log(11 <= 11) //  true
// console.log(3 <= 2)   // false

// Arrays - ordered lists of items - coposite / complex data type

// 0 indexed

// let featuredPosts = [
//   "Check out my Netflix clone",
//   "Here's the code for my project",
//   "I've just relaunched my portfolio"
// ];

// console.log(featuredPosts [2]);
// console.log(featuredPosts.length); //3 - el total de los items en el array - length no es 0 indexed - funciona como en la vida real.
// uso coma entre los items pero no despues del ultimo

// let mySelf = ["Boris Becco", 28, true] //string - number - boolean

// let cardss = [7,4];

// cardss.push (6,10,14) //push es un metodo que me permite agregar items al array.

// console.log (cardss)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push (newMessage);

// console.log (messages);

// messages.pop ();

// console.log(messages);

// El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

//how to count??

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

// START           FINISH        STEP SIZE
// for (let count = 1; count <= 10; count+=1) {
//     console.log(count) //what is the value of count by each single itiration
//                        //by the first itiration allways it will be the value of the variable

// }

// for (let i = 10; i <= 100; i += 10) {
//   console.log(i);
// }

// i = index / se usa para los ciclos como palabra convencional

// DRY - Don't repeat yourself - uno de los principios para evitar escribir codigo de mas

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear"
// ]

// for (let i = 0; i < messages.length; i++) { //dynamic way - actual length of array
//     console.log(messages[i]);

// }

// let cardss = [7, 3, 9];

// for (let i = 0; i < cardss.length; i++) { //i++ = i+=1
//   console.log(cardss[i]);
// }
