let myArray=[1,2,3,4,5];
function takesArray(myDouble){
    myDouble();
}
takesArray(function myDouble(myArray){
return myArray.map((el)=>{
    el*2;
})
})

