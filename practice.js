// let emp=[
// {
//     name:"abc",
//     age:30
// },

// {
//     name:'xyz',
//     age:20
// },
// {
//     name:"cde",
//     age:25
// },
// {
//     name:"fgh",
//     age:20
// }
// ]


// const newArray=emp.filter((el)=>{
//     if(el.age<26){
//         return el.name,el.age;
//     }
// });
// console.log(newArray);

// const app=document.getElementById('app');
// newArray.map(({name,age})=>{
//     const dataToShow=`${name} ${age}`
//       let hello=dataToShow.push(`${name}:${age}`);
//     console.log(`${dataToShow}`)  
//     app.innerText=dataToShow;
// })


//less than 4 resolved greater than 4 reject

// const testPromise=new Promise((resolve,reject)=>{
//     let value=3;
//     if(value<4){
//         resolve("value is less than 4");
//     }
//     else{
//         reject("greater than 4");
//     }
// });

// testPromise
// .then((result)=>{
//   console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// });

// function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//     for(let i=0;i<arr.length;i++){
//       if(arr[i].indexOf(elem)==-1){
//         newArr.push(arr[i]);
//       }
//     }
// //     // Only change code above this line
// //     return newArr;
// //   }
  
// //   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// function x(){
//   var i=1;
//   setTimeout(function(){
//     console.log(i);
//   },4000)
// }

// x()


function timer(){
  for(var i=1;i<=5;i++){

    function close(x){
      setTimeout(function(){
        console.log(x)
      },i*1000)
    }
    close(i)
  }
}

timer()










