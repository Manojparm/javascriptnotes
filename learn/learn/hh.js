// const a=[1,2,3];
// const b=[4,5,6];
// const c=[...a,...b];
// console.log(c);




// function myArray(){
//    const conarray= Array.from(arguments);
//    const multiarray=conarray.map(el=>el*2);
//    console.log(multiarray);
// }




// myArray(2,3);
// myArray(2,3,4);
// function myarray(){
//    const newarray=Array.from(arguments);
//       const multiarray=newarray.map(x=>x*2);
//       console.log(multiarray);
// }
// myarray(2,3)   //4,6
// function myarrguments(...args){
// const hel=args.map(x=>x*2);
// console.log(hel)}
// myarrguments(2,4);  //4,8

//Set object let you store unique value of any type wheter primitive or object reference.
const t= new Set()
t.add(2);
t.add(1);
t.add(5);
t.add(2);
console.log(t);

//remove duplicate value in an array
let a=[1,2,3,4,5,6,2,4,5];
   const noduplication=new Set(a);
   console.log(noduplication);
//ask that wheter the eliment is or not
console.log(noduplication.has(9));
console.log(noduplication.has(2));
//use of clear function
console.log(noduplication.clear());
//

     const Mymap= new Map; //this is the way of creating a Map by using new keyword
                           //map is a objet
console.log(Mymap); //here we did console to see it will look like
console.log(Mymap.size);//to check the size.here the size is zero.
//now we need to learn how to insert value in Map and there are couple of ways.
//there are many methods like has,clear,set,get,foreach.

//here we have an intersting array and we will see how it works.
let arr=[
   [1,"manoj"],
   [2,"komal"],
   [3,"nicky"],
   [4,"Gautam"],
   [5,"kusum"],
   [2,"komal"],//set dont show duplicate value.
   [1,"hitesh"],//here key is same but value is different and if the key is same it will not show duplicate value
   [6,"nicky"], //here the key id different but the value is same. if the key is different it will show duplicate value.
];
//here we have an array and in that array's inside we have another array and it contain number and string.
//now how can we crate object from this array.for this we have to think little bit of a logic and the logic is 
//*I have an array and we have to creat map[problem] to do this we should add key and values to it and we have to use .set propery
//have an array and to creat map from it.[we have to loop through ] and we will use map.
//here we will only focus on[1,"manoj"] because others we have solve by using loop.
arr.map(el=>Mymap.set(el[0],el[1]));
//here Mymap.set will create a set and now have to add add values to it.el[0] is a key and el[1] is a value.
console.log(Mymap); //here we did console to see what we did. 
//and finally we converted it to object.