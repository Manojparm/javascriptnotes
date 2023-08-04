// function isEvenorOdd(){
//     try{
//         if(x%2==0){
//             console.log("even");
//         }
//         else{
//             console.log("odd");
//         }
//         console.log("ending");
//     }
//     catch{
//         console.log("handled")
//     }
//     finally{
//         //finallly is a block of code that is run after try or catch whatever is completed itself and finally will always run.

//     }
// }
// isEvenorOdd(11);
// console.log("stop");




// function isPrime(x){
//     console.lg("starting");
//     try{for(i=2;i<=x-1;i++){
//         if(x%i==2){
//             return "not prime";
//         }
//      }   
//      return "prime";}
//      catch(err){  //err keyword is used to find out the exception of the code.
//         console.log("handled", err);
//      }
 
// }
// console.log(isPrime(2));
//if you want to run some code that is independent of try and catch we will put that code in finally 
//catch keyward can also act as a function and like this cath() and here we want the access of error object so we will type like this catch(err)


//now we want to throw some error on ourself and based on our business login we can also throw some errors
//and we can use this syntax throw new Error(); and by using this we are actually throwing run time error and 
//when we get the run time error we imediately get out of try block and reach to catch block 
//the moment we reach inside catch we get access to err object
function isPrime1(x){
    
    try{
        for(let i=2;i<=x-1;i++){
        if(x%i==0){
            throw new Error("not a prime");
            //throw "not prime" we can also throw like this .
        }
     }   
     return "prime";}
     catch(err){  //err keyword is used to find out the exception of the code.
        console.log("handled", err);
     }
 finally{
    console.log("end");
 }
}
console.log(isPrime1(4));
