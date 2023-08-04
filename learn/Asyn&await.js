//Async 
/*The Async keyword is used to make function asynchronous.
an asynchronous function is a function that returns a promise 
which represents the eventual completion of the operation 
performed by the function.

The work of the async is to make a funcion work without the
need of freezing the complete program.  */

//Await
/*The await keyword is used to wait for the completion of an
asynchronous opertaion inside an asynchronous function.It can
only be used inside an asynchronous function that is marked
with the async keyword.

When we use the await keyword,the funtion execution is paused
until the promise returned by the asynchronous operation is 
resolved or rejected.The resolved value of the promise is 
then returned,allowing us to continue executing the function
with the resolved value.
*/

// async function consume(){
//     return 10;
// }
// console.log(consume());

function returnDummyPromise(){
    return new Promise(function exec(resolve,rejected){
        setTimeout(function f(){
            console.log("timer completd");
            
          
                resolve("done");
                ;
            
        },2000);
    });
}

 async function consume(){
     console.log("start");
     let response=await returnDummyPromise();
     let response1=await returnDummyPromise();
     let response2=await returnDummyPromise();
     console.log("resposee is ",response);
}
consume();
console.log('ending'); // step 2for comparing results;