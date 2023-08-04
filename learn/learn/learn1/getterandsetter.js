//there is a  concept of gatters and setters 
//In order to set particullarly set data member or fetch the value of data member.
class knowsomething{
    #consumername;
    #rating=0;
    constructor(){
        this.#consumername="manoj";
       this.about="topic";
       this.Details="This is explanation";
       this.summary="here is the summay of above mention topic";
    
    }
    getName(){
        console.log(this.#consumername);
    }
    display(){
        console.log(this.#consumername,this.#rating);
    }
    setName(newname){
        this.#consumername=newname;
        console.log(newname);

    }
   
   get  rating(){
    console.log(this.#rating);

    }
    set rating(r){
        if(r<0) return;
       this.#rating=r;
    }
}

const didyouget=new knowsomething();
didyouget.getName();  //here this getName usually become a getter method using which you can get a particular value.
//we can also set gatter and satter for private and public data

didyouget.setName("Komal");
didyouget.getName();
didyouget.display();
didyouget.rating; //this is now  calles as gatter and satter method 
didyouget.rating=3;
didyouget.display();


//we can also put some restriction on satter method.
//we can also put some logic inside our gatter and satter method.
//javascript has a sophasticated way to write gatter and satter method what we can do is write get than space and Name like this( get Name())
// it is just like a normal function the difference is how you call

//stack 
//stack is actually a linear data structure in which one end is not accesible and on the other hand you can only add data member.eg:stack of plates,stack of books.
//we can implement stack using array .

class stack{
    #arr;
    constructor(){
        this.#arr=[];
    }
    push(x){
        this.#arr.push(x);
    }
    pop(){
        this.#arr.pop();
    }
    top(){
        if(this.#arr.lenth==0) return undefined;
        return this.#arr[this.#arr.length-1];

    }
}
const st= new stack();
st.push(10);
st.push(20);
st.push(30);
console.log(st.top());
st.push(40);
st.push(50);
console.log(st.top());
st.pop();
console.log(st.top());
//here we had made the internal details hidden from the end user ,the end user only know how to use the functionality they can't modify it .

//complex number is made from real and imaginary part .
//writing complex number class.

class complexNumber{
    #real;
    #img;
    constructor(r,i){
        this.#real=r;
        this.#img=i;
    }
    get real(){
        return this.#real;
    }
    get img(){
        return this.#img;
    }
    addcomplexNumber(c){
        this.#real+=c.real;
        this.#img+=c.img;
    }
    display(){
        console.log(this.#real,"+ i",this.#img);
    }
}
const c1=new complexNumber(5,3);
const c2=new complexNumber(1,2);
c1.addcomplexNumber(c2);
c1.display();