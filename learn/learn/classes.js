//classes are blueprints for actual entities they define what property the actual entity will have.
//classes serve as a blueprint for creating objects,providing  a way to organize and structure code.
//they allow you to define objects with similar properties and methods in a reusable manner,reducing the amount of code you need to write and making your code easier to maintain.

//reasons why you might want to use classes in javascript::
//object-Oriented programming,Reusability,Abstraction,Encapsulation,Modularity
//classes were introduced in ECMAScript 6 (ES6)
// a class is defined using the class keyword,followed by the class name , and a block of code that define the properties and methods of the class.

class product {
    //behaviour that you want to show are in the form of methods.
   //and this are functions available in the class.
   constructor(n,p,d){
    console.log(this);
     this.name=n;
     this.price=p;
     this.discount=d;
    // return "sanket " this will be ignore but if we return an object than object wil be returned for example
    // return {name:"manoj",age:3}; this will not be ignored it will be returned
   }
   display(){
        console.log("This is a product");
   }
   discountedPrice(){
    let newPrice=this.price*(Math.floor(100-this.discount)/100);
    return newPrice;

   }
}

//creating new entity
let p= new product("Iphone",100000,10);//it is a defalut contructor and it creates an empty object in the memory adn that assigned to variable p//this is the construtur method of the class 
//constructor methods of the class actually creates a new object using the class blueprint that we have created.  
//and using this object we can call its behaviour and methods
p.display();
console.log(p);
let p1=new product("samsung",60000,10);
console.log(p,p1);
console.log(p1.discountedPrice());

//new keyword actually helps us to create an emplty object w
//wherever we use the new keyword it creates a empty  object
 // when we write name of the class along with the parenthesisi it calls a constructor function.
 //so everytime when we create a new object a constructor function is called.
 //this keywod actually refers to the same object we created.
 //A class can have only one constructor
//in constructor method if you don't return anything it is going to return the same object that you newly created ,if you are going to return a primitive than it will ignore it for example return "hello everyone" //here nothing will be returned .
//if you dont  return anything js returns the newly created object.
//if you return primitive than also we get newly created object.
// if you return custom object than js will return custom obj  not the newly created obj

//In-built constructor of string and Number classes
let x=new String("hello");
let y=new Number(3);
console.log(x);
console.log(y);
//initially when javascript did not  introduced classes people used used functions to create blueprint.we actually have function constructor.
 function productt(n,p)
{
     this.name=n;
     this.price=p;
     //return "saket" this will not be returned it wil be ignored
    // return {name:"manoj",age:3}; here only these object will be returned 

}
const pp= new productt("NOKIA",5000)  //here it is just simply a fuction call but due to new keyword it will create an  new empty object  ,here function call will act as a constructor because we are associating it with a new keyword here.
console.log(pp);

/*
*this in js is different than other language.
*this keyword refers to the context from where we call the function-> is not applicable to arrow functions 


*/


/*
*if you dont return anything js will return newly created obj 
*if you return primitive than also we got newly created obj.
*if you return custom obj than js will return this custom obj not the newly created obj.
*/


//arrow functions
const productyy=(n,p)=>{
     // this.name=n;
     // this.price=p;
}
// const ppp=new productyy("samsung",6800);
// console.log(ppp);
//here it will say productyy is not a constructor,with arrow function expression we cannot use a constructor but if( we just make a normal function expression then it will work like this:
const ppproduct = function(n,p) {
    this.name=n;
    this.price=p;
}
const puu=new ppproduct("hello",099);
console.log(puu);

//now here we will have object and we will do some operation in it 
// let obj ={
//      x:20,y:20
// }

// function display(){
//      console.log(this.x);
// }
// obj.display();  //it will say that obj is not a function because inside the obj objcect we dont have a display method altogether.
//so we can do like this.
// let obj ={
//      x:10,y:20,
//     display(){
//           console.log(this.x); //here this refers to the call side ,here call side is the obj object and in this obj the value of x is 10 so we will get 10.

//      }
// }
// obj.display();

//here we can also use arrow function but it will say undefined for example:
// let obj ={
//      x:10,y:20,
//     display:()=>{
//           console.log(this.x); //here this refers to the call side ,here call side is the obj object and in this obj the value of x is 10 so we will get 10.
          
//      }
// }
// obj.display();
//we can also use normal function it will not throw an error
let obj ={
     x:10,y:20,
    display:function (){
          console.log(this.x); //here this refers to the call side ,here call side is the obj object and in this obj the value of x is 10 so we will get 10.
          
     }
}
obj.display();



//static methods of clsses
//we can call the static method without creating an object
//by using the class name we can call the static method .
//static methods are not avialble for object to call. 
//use case of static method:if we want execute a piece of code before actually intantiate an object directly through the class where you dont need an object to execute the functionatlity. 
class welcome{
     static newuser(){     //it is static method .and it is associated to the class not an object.
          console.log("Enter your name :");

     }

}
welcome.newuser();

//now we don't want to associate any value to the data member

class music {
     audience; //now here we will have data member but it will be undefined.here we dont want to give any initial value. and this wil be available to our object also.
     Show_price;
     socialmedia_handle="instagram";//this properies can also be accesed outside the class also.outside the class we created an object and using that object we can acces this properties.this properties can also be updated.
     constructor(n,a,v){
          this.songname=n;
          this.artisname=a;
          this.no_of_views=v;
          this.Show_price=2000; //now we have assigned the value to the data member here.if we assigned a value here than they will not be undefined.
          
     }
}
const album=new music("Aashique","Arijit singh",100000000);
console.log(album);
console.log(album.Show_price);//
console.log(album.socialmedia_handle);//here we have accesd the above declared properties outside the class.
album.artistname="manoj"; //here we have updateded the above declared properties.
console.log(album.artistname);


//now we cant some properties only accesible inside the class.and it don't visible outside.so we can make those properties private.if we put # before data member so it will be private.

class builders{
     #popularprojectname;
     #builder_name; //declare the private member here befor you use
     constructor(){
        this.#builder_name="manoj";
        this.Experience_year=5;
        this.no_of_projects_completed=15;
        this.popularprojectname="invitation"; //now we two seperate data member with the same name one is private and anothe is puplic these both sepertate data member.
     }
     display(){
          console.log("this is how you can access the privte date member outside the class",this.#builder_name,this.Experience_year);
     }
}
const buildsomething=new builders();
// console.log(buildsomething);
buildsomething.display()
console.log(buildsomething);
//here we can acces private data member inside the class and display method is also inside the class.
