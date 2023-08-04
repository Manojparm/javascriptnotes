//Anything can be injected by using prototype.

let myHeros=["Thor","Spiderman"];
let dcHeroes=["Batman","flash","Superman"];

//here we have created an object.
let heroPower={
Thor:"hammer",
Spiderman:"sling",
//we can also created a function inside the object.
getHeropwer:function(){
    console.log(`The power of Spiderman is ${this.Spiderman}`);
}
}
//Now we want to inject something more in the above object externally.
//after the prototype we can inject any property.
//here Object is an regular object so anything that is object will have access to this manoj.
Object.prototype.manoj=function(){
    console.log("Manoj is present in all object");
}
console.log(heroPower.manoj());//here we noticed this object is present in everywher wheter it is an array or 
console.log(myHeros.manoj());//an object
console.log(dcHeroes.manoj());
//but when we insert something in Array so it will be available only to the array not the object below this we will have an example
Array.prototype.heymanoj=function(){
    console.log("manoj says hi to an array");
}
console.log(myHeros.heymanoj());//this heymanoj property will available to all the Array but not the object.
//console.log(heroPower.heymanoj()); //this wiill throww an error because heymanoj is not available to the object it will only available to the array.

//Now we will talk about inheritance.

const user={
    name:"top name",
    email:"topemail@gmail.com",
}

const teacher={
    makeVideos:true,
}
const Teachingsupport={
    isAvailable:false,
}
const Taassistance={
    makeAssignment:"js Assignment",
    fullTime:true,
    __proto__:Teachingsupport //(old syntex of inheritance)  //now all the properties which is available in Teachingsupport will be available to the Taassistancae.
}
//another old syntex of inheritance
teacher.__proto__=user  //old syntex of inheritace all the properties of user will be available to the teacher.
console.log(Taassistance.isAvailable);
console.log(teacher.name);
//now the modern syntex of prototype inheritance.
Object.setPrototypeOf(Teachingsupport,teacher);  //here teacher properties will be available to the teaching support.
console.log(Teachingsupport.makeVideos);

//now we will write the programm to get the true length

String.prototype.truelength=function(){
    console.log(`the true length is : ${this.trim().length}`)
}
let myName="Mannoj  ";
console.log(myName);
myName.truelength()
