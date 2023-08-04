//Q1 given a size of three line segment,check whether using these
//segments we can form a triangle or not?
let a=10,b=5,c=8;
if(((a+b)>c)&&((a+c)>b)&&((b+c)>a)){
console.log("yes traingle can be formed")
}
else{
    console.log("no traingle cannot be formed");
}

//Q2 check wheter the given no is a perfect square or not.
let x=25;
let y=Math.floor(Math.sqrt(x));
if(y**2==x){
    console.log("the given no is a perfect square no");
}
else{
    console.log("the given no is not a perfect square no")
}

//Q3 Given a no z check wheter it is even or odd nuber
//using bitwise only
//if the last bit 0 no is even and if the last bit is 1 the no is odd.
//If we do bitwise of odd no with 1 then we get 1
//If we do bitwise of even no with 1 then we get 0 
//1 is true and 0 is false in bitwise.
let z=3;
if(z &1){
    console.log("odd no ");
}
else{
    console.log("even no");
}


let k=1;
while(k<=10){
    console.log(k);
    k++;
}
//Q4 check wheter a given no is a prime or not
let n=4;
let ans=true;
for(let i=2;i<=n-1;i++){
    if(n%i==0){
        ans=false;
        break;
    }
}
if(ans==true){
    console.log("yes it's a prime no");
}
else {
    console.log("no it's not a prime no");
}