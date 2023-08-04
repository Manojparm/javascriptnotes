//How javacript works.(1-2)

//everything in javascript happens inside an ececution context.
//ececutin context is like a big box and have two component in it.
//firts component is also know as memory component where all the 
//variables and functions are stored as a key-value pairs.and this 
//memory component is know as variable environment.
//and second component is code component. and is know as thread of 
//execution.and the whole code is executed one line at a time.

//"javascript is a synchronous single-threaded language."
//single threaded means javacript can excute one command at a time.
//synchronous single threaded means that javascript can execute one command at a time,
//and in a specific order.

//when the whole js code is run the global execution is created and it has two component memory and code.
// meomry creation phase:js will allocate memory to all the variables and functions.
//code exection phase:

//returun keyword:return the control of the program where this 
//function was invoked.

//the whole creation execution context deletion everything is managed by call stack.
//whenever the execution contect is created it is pushed into the stack and
//whenver the exection context is deleated it is moved out of the stack.

//"Call stack maintains the order of execution of execution contexts."
//call stack is known as execution context stack,program stack,control stack,Runtime stack, machine stack.



//Hosting in javascript(3)
/* Hosting is a phenomena in javascript by which we can access
put some value in it,we can access it whitout any error.

even before the code start executing memeory is allocated to all
variables and functions 

(GOLDEN RULES
*variable declartion are scanned and made undefined.
*Function declarations are scanned and are made available. )

 Arrow functions enact as variables and get "undefined" during 
 the memory creation phase while functions actually get run.



*/


//The socpe chain ,scope,lexical environment


/* 
Scope in js is directly related to lexical environment.

Scope means whare you can access a specific variable and function in our code.

Lexical environment:whenver an exection context is created a lexcial environment
is also created so lexical environment is the local memory along with the 
lexical environment of it's parent.

function a(){
    var b=10;
    c();
    function c(){        //here lexical parent of c is a ,because c is lexically inside a so
                           it will get lexical environment of a also .
                         
 }                       //lexical environment of  a is its meomory space plus the lexcial
}                          environment of a's parents.and here the parent is global
 a();    
                        //global has null lexical environment.

scope chain is the chain of all the lexical environment and the parent references is know as scope
chin.example if js dosen't find anything in local memory it goes next level of the scope chain
and here also it doesn't find it also goes to next level of scope chain.

                        */                       



//Block,Scope and shadowing

/*block=>block is dafined by curly braces,block is also know as compound statement means block
is used to combine multiple js statement into one group. 

Block scope:Block scope means what all  variables and functions we can access inside the block.

{
    var=a;                 // var is a globally socped where as let and const are blocked scope.
    let=b;         
    const=c;
}

Shadowing:if we have the same named variable outside the block.the vaiable that is inside the 
block shadows the variable that is outside the block.

var a=100;
{
    var a=10;
    console.log(a); this will print 10
}
console.log(a); this will also print 10 ,here the varible inside the block shadowed the varible 
with the same name outside the block and it also updated the value of that shadowed variable.this
happens becauese they are both pointing to the same memory locations.

illegal shadowning:we can shadow a let using let but we cannot shadow a let using var.


//Temporal Deadzone

/*
1. let and const are hoisted but its memory is allocated at other place than window
 which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using 
let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have
   memory allocation} [2] typeError {given when we change type that is not supposed to 
   be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.





> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
-> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
-> level of strictness ... var<<let<<const.
-> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
    let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
    const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
-> syntax error is similar to compile error. while type and reference error falls under run time error.
-> syntax error ... violation of JS syntax
    type error ...  while trying to re-initialize const variable
    reference error ... while trying to access variable which is not there in global memory.


#Difference between let,var and const

->var is globally scoped while let and cost are block scope.
->var can be updated and redeclared within it's scope while let can be
updated but cann't redeclared,const neither updated nor redeclared.
->const must be initialized during declarations,unlike var and let.


*/

//Template literals
/*
  =>Template literals is the feature of ES6(ECMAScript 2015).
  =>Template literals,also know as template strings.
  =>It helps in easier string interpolation and multiple string
    in javascript.
  =>we can use template literals using backtick and to give 
   expression inside it we give ${} dolar,currly bracees inside that we put our expression.

*/



//closure

/*

closure:A closure is the combination of a function bundle together with
refrences to it's surronding state(the lexical environment).In 
word's , a closure gives you accesss to another function's scope,from
an inner function.In javascript,closures are created every time a 
function is created,at function creation time.

function are heart of js
//we can assign function to a variable
function x(){
    var a=function y(){
      cosole.log(a);
    }
    y();
}
x()
//we can pass function to another function as a parameter

function x(){
    var a=7;
    y();
}
x(function y(){
    console.log(a);
});

//we can return the function from a function
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();   //let's grab this function call into a variable and seem what does it return.
console.log(z); it will give us the whole function defination of y.[aa

USES OF CLOSURE:
*maintaing state in async world
*Settimeouts
*iterators
*functions like once:it can run only once
*module Design pattern
*Currying
*memoize

    

*/

//setTimeout closure interview Question
/*
=>function x(){
    var i=1;
    setTimeout(function(){
     console.log(i)
    },1000)
}
x()  output:it will print the value of i after 1 second

=>function x(){
    var i=1;
    setTimeout(function()=>{
        console.log(i);
    },3000)
    console.log("hello everyone")
}
x()  output:first of all it will print hello everyone and after
     the three second it will print the value of i.

=>Now,the question is we have the print no in que 1 after one sec
2 after two sec 3 after three sec and this will goes on till 5. 











*/






//Fuctions:

/*

//function Statement or function declaration:

function a(){
    console.log("a");
}

a();   //calling funtion

//function expression:

var b=function (){
    consol.log("b called");
}
   b();  //calling function

   what is Difference between function statement and function expressing?
   Ans:During the hoisting phase  statement function created memory and assigned to a 
       but in case of a function expression b is treated like some other variables and
       it will assignned undefined until the code hit the defination of the function.
 *we can call the function statement or declaration even before creating it but we
  cannot call function expression before creating it because it is treated as some other
  variables and when we try it to access it thows us undefined.

//Anonymous Function:
A function without a name is a anonymous functions.Anonymous function do not have their
own identity.Anonymous functions are used in a place where functions are used as values.

//Named function expression:

let d=function xyz(){
    console.log("named function expression");
    console.log(xyz)  // it can be accsed here it a function inside the block
}

d(); //calling of named function expression

xyz(); //if we call like this, it will say xyz is not defined and xyz is not a function for 
the  outer scope

//arrow functions:


Qdifference between parameters and arguments?
 *paracmenter are the local variables for the function we cannot access parameter outside the
 function.It get the values from the arguments.
 *argument are the actual values that we passed during the function calling.

 Qfirst class function or first class citizen?
  The ability to use functions as values and cab be passed as arguments to another function,and it 
  can also be return from functions and this ability of function  is known as first class functions
  in javascript.
  

*/


//Higher Order Function:
/*
Higher order function:A function which takes another function as an argument or returns a function from it
is known as higher order function.

fuction x(){
    console.log("hello");
}

function y(x){           y is a higer order function and x is a callback function.
    console.log(y);
    x();
}




*/


//map,filter,reduce

/*

map:map function is used to mapping   each and
every element of an array.


Qwe have given an array? [5,1,3,2,6];

//doule -[10,2,6,4,12]

const array=[5,1,3,2,6];

const double=array.map((el)=>el*2);
console.log(double);

//Triple-[15,3,9,6,18];

const array=[5,1,3,2,6];

const triple=array.map((el)=>el*3);
console.log(triple);

//binary-["101","1","11","10","110"]

const array=[5,1,3,2,6];

const binary=array.map((el)=>el.toString(2));
console.log(binary);


//filter:filter function is used the filter the element inside
the array.

//filter odd values.

const array=[5,1,3,2,6];

const odd=array.filter((el)=>el%2!==0);
console.log(odd);

//fiter even values.

const array=[5,1,3,2,6];

const even=array.filter((el)=>el%2==0);
console.log(even);

//vauls greater than 4

const array=[5,1,3,2,6];
const greaterThan=array.filter((el)=>el>4);
console.log(greaterThan);

//Reduce:reduce function is used at a place where you have
to take all the elements of an array and come up with a single
value out of them.

reduce funtion takes a function  and this functio has two
 parameter one is accumulator and second one is current.
and it also take two argument one is function and another 
is initaial value example:

array.reduce(function(acc,curr){
    
}0)  //here 0 is the initial value

//sum or max

//with traditional way
const array=[5,1,3,2,6];


//   function findSum(array){
//     let sum=0;
//     for(let i=0;i<array.length;i++){
//         sum=sum+array[i];
//     }
//   return sum;
// }

// console.log(findSum(array));
    //with reduce function 
    
let sumOfArray=array.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);

console.log(sumOfArray);

//Max from an array

//traditional

const array=[5,1,3,2,6];

// function findmax(array){
//     let max=0;
// for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i]
//     }

// }
// return max;
// }

// console.log(findmax(array));

//max with reduce

const output=array.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0);

console.log(output);


//List of full Names

const user=[
    {firstname="Manoj",lastname:"Parmmar",age:21},
    {firstname="Komal",lastname:"Maria",age:21}  ];

const fullnames=user.map((el)=>el.firstname+" "+el.lastname);
    console.log(fullnames);



    Q:Question on reduce://we have to get this acc={26:2,75:1,50:1}
    const users=[
    {firstName:"akshay",lastName:"saini",age:26},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"musk",age:50},
    {firstName:"deepika",lastName:"padukone",age:26}
]


const output=users.reduce(function(acc,curr){
   if(acc[curr.age]){
     acc[curr.age]=++acc[curr.age];
   }
   else{
    acc[curr.age]=1;
   }
   return acc;
},{})

console.log(output);


// Question:find the first name of person whose age is less 
than 30?

const users=[
{firstName:"akshay",lastName:"saini",age:26},
{firstName:"donald",lastName:"trump",age:75},
{firstName:"elon",lastName:"musk",age:50},
{firstName:"deepika",lastName:"padukone",age:26}

]


let output=users.filter((x)=>x.age<30)
.map((x)=>x.firstName);


console.log(output);


// Question:find the first name of person whose age is less 
//than 30? with reduce function.

const users=[
{firstName:"akshay",lastName:"saini",age:26},
{firstName:"donald",lastName:"trump",age:75},
{firstName:"elon",lastName:"musk",age:50},
{firstName:"deepika",lastName:"padukone",age:26}

]


const output=users.reduce(function (acc,curr){
     if(curr.age<30){
        acc.push(curr.firstName);
     }
     return acc;
},[]);

console.log(output);





*/





//callback functions(17)

//A callback is a function passed as an argument to another function.
// setTimeout(function(){  //inside setTimeout function we have 
// console.log("done");    //parameter as function and that is
// },4000);                //a call back funtion.
// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })

//javascript has only one call stack  and you can also call it as
//main threat everything whatever is executing inside your page is executing throught call stack.

//any operating that  blocks the call stack so that is known as blocking the main threat.

//garbage collection and EventListener Question:why do we need to remove Event Listener?
//Ans:EventListener are heavy that means it takes memory and our page can run slow ,when we
//attach a event listener it kind of form a closure we remove eventlistner from the page when
// they are not using to free the memory.so the good practice is that we should remove the evenlistener.












//Callback hell (1)
//using callback is a powerful tool to do asynchronous in js.
//call back plays a very impotant role in js for writing asynchronous code.

console.log("hello,");
setTimeout(
    function hello(){
        console.log("Manoj");},5000);
console.log("Good morning");


//callback hell:when we have a large code base and so many apis and apis are
// dependent on one after another so what's happend is we end in falling into
// the call back hell ,one callback inside antother callback inside another
// apis or some if statement and makes this callback hell and our code start
// to grow horizontally instead of vertically this are callback hell.and this
// kind of code structure is very unreadable and unmaintainable.and the structure 
//of callback hell is also known as pyramid of doom.
                         //or
                                          
  //  When a callback function is kept inside another function, which in turn
                        // is kept inside another function. (in short, a lot of nested callbacks). 
                        //This causes a pyramid of doom structure causing our code to grow horizontally, 
                        //making it tough to manage our code.     

//create order ,payment,order symmmary,updatewalled.

// cart=["shoes","pants","kurta"];

// api.createOrder(cart,function(){

//      api.proceedToPyament(function(){
       
//         api.showOrderSummary(
//             function(){
//                 api.updateWallet()
//             }
//         )
    
//     }) 

   
//     })

    //Inversion of Control
    //This is the another problem of callback inversion of control is like 
    //you loose the control of your code when we are using callback

              // or
            //   This happens when the control of program is no longer in our hands.
            // In nested functions, one API calls the callback function received but we don't know how 
            //the code is written inside that API and how will it effect our code. Will our function be 
            //called or not? What if called twice? What if it has bugs inside it? We have given control of our code to other code. 



//Promises (2)
//promises are used to handle async operation is js.

// const cart=["shoes","pants","kurta"];
//before promises by using callback functions to performe asynchronus task.
//createorder api this api will take cart item and return order details.
createOrder(cart,function(orderId){
    proceedToPayment(orderId);
 });    //here is the issue of inversion of control,here we cant turst blindly to createOrder api ,
 //here we have given our responsibliy to some other api for proceedToPayment and it is not in our control 
 //we just passed it and waiting to execute after the order is reacted.so it is risky passing callback function
 // like this is not reliable here we have given our control to some other part of the code and we are not aware of that.

 //performing asynchronous task with the help of promise 
            // const promise= createOrder(cart);  //whenever this line will get executed this createOrder api will return us a
            // promise.promise is nothing but it is just an empty object with some data value in it.whenever js will execute 
            //this line this createOrder api will return us a promise, promise is nothing but an empty object and what will 
            //happen is progamme will go on executing and after 5 sec or 6sec how much ever time it take what happen is this
            // promise object will be filled with data automatically.
//now we will attach a callback function to this object promise.
    //once we have data inside this promise obj ,this callback function that we attached to this promis obj will be automatically called .
promise.then(function(orderId){
    proceedToPayment(orderId);
})
//here we will have control in our hand ,createOrder api will only do its job it will create an  order and it will fill the promise object
// with the data whenver its want to and whenever this promise obj filled with data it will automatically calls the callback function.


//Now we will see how promise object looks like.
//fetch():fetch function it is basically an api given by browser to us to make external calls 
//now we will use fetch function to make an api call to github server and get a user info with us 
const GITHUB_API="https://api.github.com/users/akshaymarch7";
const user=fetch(GITHUB_API); //this fetch function will return us a promise 
console.log(user);
//there can be only three 3 state of promise pending,fulfilled and rejected.
//promise obj is immutable.

// Interview Pov
// //Q:what is promise?
// Promise obj is a placeholder for a certain period of time util we receive a value from a asynchronous operation.
//   or
//   container for a future value.
//   or
//   a promise is an object representing the eventual completion or failure of an asynchronous operation.
 
//promise Chaining
 creatOrder().then(function(orderId){
 return   proceedToPayment(orderId);
 })
 .then(function(paymentInfo){
 return   showOrderSummary(paymentInfo);
 })
 .then(function(paymentInfo){
 return   updateWalletBalance(paymentInfo);
 })
// promise chaining with arrow function for better readability
createOrder(cart)
.then(orderId=> proceedTopayment(orderId))
.then(paymentInfo=>showOrderSummary(paymentInfo))
.then(paymentInfo=>updateWallet(paymentInfo))



//creating a promise,chaining and error handling
 

    //consuming part of promise
    const cart=["kurta","jeans","pants"];
createOrder(cart).then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId){
        return proccedToPayment(orderId);
    
      })
  
      .then(function(paymentInfo){
       return console.log(paymentInfo);
      })
      
    //catch is used for falliure of asynchornous operation
    //and to handle errors gracefully.
    .catch(function(err){
    console.log(err.message);
    })
    
            //producer part of promise
            function createOrder(cart){
                const pr=new Promise(function(resolve,reject){
                     //createOrder
                    //validateCart
                   //orderId
                    if(!validateCart(cart)){
                         let err=new Error("enterd cart in not valid");
                         reject(err);
                    }
                     //login for createOrder
                     const orderId="new order id is here";
                     setTimeout(function(){
                         resolve(orderId);
                     },5000)
                });
                return pr;
            }
    
         function validateCart(cart){
             return true;
            }

            function proccedToPayment(orderId){
                return new Promise(function(resolve,reject){
                    resolve("payment Succesfull");
                })
            }






      //Differecnce between map and forEach

/*
=>map and forEach each used to iterate an array but both
works differently.

=>map method is used to create a new array after executing
a function on each element in the array whereas forEach
also iterate each element of an array but it does not return
anything.

=>map does not modified the original array it just iterate 
throught the original array and do some specfied operation
and retrun the new array.

=>map method is chainable whereas forEach method is not 
chianable.

*/


//Array and object destructuring

/*

Array destructuring:
=>We can use array destructuring to extract individual
values from an array and assign them to variables in more
concise and readable way.Array destructring allows us to
upack array elements easily.

Example:
const myArray=[1,2,3];

//Extactiong elements into individual variables
const [first,second,third]=myArray;

console.log(first);
console.log(second);
console.log(third);

Here myArray is destructured into three seperate variables.

we can also skip elements using commas if we are intrested in
some of the elements:
Example:
const myArray=[1,2,3,4,5];
const [first,,,fifth]=myArray;

console.log(first);
console.log(fifth);

You can also use the rest syntax (...) to capture the 
remaining elements as an array:
Example:
const myArray = [1, 2, 3, 4, 5];

const [first, ...rest] = myArray;

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]


// Swapping variables using array destructuring
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // Output: 20
console.log(b); // Output: 10

//object destructing
object destructuring allows you to unpack object properties
easily.

Example:
const myObject={
    firstName:'Jaoh',
    lastName:'Due',
    age:30
};

//Extracting properties into individual variables:
const {firstName,lastName,age}=myObject;

console.log(firstName); // Output: 'John'
console.log(lastName); // Output: 'Doe'
console.log(age); // Output: 30

You can also assign the extracted properties
 to new variable names if needed:


 example:
 const myObject={
    firstName:'John',
    lastName:'Due',
    age:30
 };

 // Extracting properties and assigning to new variable names
const { firstName: fName, lastName: lName, age: personAge } = myObject;

console.log(fName); // Output: 'John'
console.log(lName); // Output: 'Doe'
console.log(personAge); // Output: 30
*/

//What are the major features introduced in ECMAScript 6?
/*
1.let and const declarations
2.arrow functions
3template literals
4.Enhanced object literals
5.Destructuring Assignment
6.Default Parameters
7.Rest and spread operatiors
8.classes
9.Modules:import and export
10:iterators and generators
11.Promosies
12.Symbol and Symbol properties
13.Map,Set,WeakMap and WeakSet
*/

//Rest Parameter
/*
Rest parameter is an improved way to handle function
parameter,allowing us to more easily handle various input
as parameters in a function.The rest parameter syntax
allows us to respresent an indefinite number of arguments
as an array.
Ex:
function sum(a,b,c,d,e,f){
console.log(a+b+C+d+e+f);
}
sum(1,2,3,4,5,6);

Now in ES6 with Rest
function sum(...inputs){
console.log(inputs); // it will come as an array
console.log(...inputs); //it will come as values
let total=0;
for (let i of inputs){
  total+=i;
}
console.log(total);
}
sum(1,2,3,4,5,6)

Output Question:
function fun(a,b,...c){
    console.log(` ${a}  ${b}`)
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
}
fun("Ronaldo","Neymar","Pele","Messi","Edan");

*/

//Spread operator

/* Spread operator allows iterable to expand in places 
where 0+ arguments are expected.It is mostly used in 
vaiable array where ther is more than 1 values are expected
.It allows us the privilege to obtain a list of parameters from
an array.Syntax of Spread operator is sam as Rest parameter
but it works completely opposite of it. 

=>spread operator replaces apply method.
function sum(){
    console.log(a+b+c+d+e);
}
const arrVal=[1,2,3,4,5];
sum.apply(null,arrVal);

//NOw in ES6

function sum(){
    console.log(a+b);
}

const arrVal=[1,2];
sum(...arrVal)

//It replaces concat()

let arr1=[1,2,3];
let arr2=[4,5,6];

arr1=arr1.concat(arr2);
cosole.log(arr1);
//Now with spread
arr1=[...arr1,arr2];

//It replace copy()
let arrc1=[1,2,3];
let arrc2=arrc1;
arrc2.push(4,5)
console.log(arrc2);  NOw both the console,will have same
conole.log(arrc1);   same no of elements which means it
                      modifid arrc1 also but we only want
                     to modifiy arrc2.

Now with spread:
let arrc2=[..aarc1,4,5]


                      */    




//call method

/*
=>The call method is a predefined  javascript method.
=>with call(),an object can use a method belonging to
another object.
Ex:
const youtuber1={
    name:"Manoj",
    content:"Programming",
    feature:function(rating,support){
       console.log(`very friendly way of teaching.
        ${this.name} is my fav ${this.content} channel.
        I will love to give ${rating} star.Please ${support}
        ${this.name}`) 
    }
}
youtuber1.feature(5,"subscribe")

const youtuber2={
    name:"Thapa",
    content:"programming",
    //Now we want to call above youtuber1 feature method here 
    and want to name and content of the youtuber2 object.
}
youtuber1.feature.call(youtuber2,5,"Subscribe");
 */


//Apply method
/*
=>The apply() method is similar to the call() method.
=>The call() method takes arguments seperately.The apply()
method takes arguments as an array.

youtuber1.feature.call(youtuber2,5,"Subscribe");
NOw the same can be achived with apply() method.

youtuber1.feature.apply(youtuber2,[5,"subscribe"])




*/

//What’s difference between Synchronous and Asynchronous?
/*
Synchronous:operation happens in a sequential order ,one of afther 
the other where each operation must complete before the next one starts.

Asynchronous:operation can overlap and ocuur independently,allowing the next
operation to starts before the previous one completes.

*/

//What are Web Apis?
/*
 APIs are interfaces that allow different software
 applications to communicate and share data over the 
 internet.They enables developers to access specific 
 features or services provided by other applications or
 plateforms.
*/

//Asynchronous Javascript & Event Loop
/*
Browser has the superpower and this superpower are:
web Apis:
*setTimeout()
*DOM API's
*fetch()
*local storage
*console
*location
and window gives access of this super power to browser engine
and Js engine can use this super power.

window is the global object and it wraps al this super power and
give access to js.

EventLoop:The job of the event loop is to cheq call back queue
and put the function of the callback que in the call stack.
EventLoop acts like a gate keeper if we have something in the 
call back queue it will push it in the call stack.

EventLoop has only one job and that is continously monitoring
call stack and call back queue.

Qwhy do we need callback queue or taskque?


*just like the callback queue we have the microtask quueue
but it has higher priority than callback queue whatever function
will be come in microtask queue will be execute first and 
whatever will be inside callback que will be execute later.

QWhat comes inside microtask que?
All the callback function which comes through promises will be
come inside this microtaskqueue.(promises ,mutations observer goes inside the microtaskque)

Starvation of the callbackquue:
 */