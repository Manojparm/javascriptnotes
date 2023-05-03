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

const cart=["shoes","pants","kurta"];
//before promises by using callback functions to performe asynchronus task.
//createorder api this api will take cart item and return order details.
createOrder(cart,function(orderId){
    proceedToPayment(orderId);
 });    //here is the issue of inversion of control,here we cant turst blindly to createOrder api ,
 //here we have given our responsibliy to some other api for proceedToPayment and it is not in our control 
 //we just passed it and waiting to execute after the order is reacted.so it is risky passing callback function
 // like this is not reliable here we have given our control to some other part of the code and we are not aware of that.

 //performing asynchronous task with the help of promise 
            const promise= createOrder(cart);  //whenever this line will get executed this createOrder api will return us a
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

