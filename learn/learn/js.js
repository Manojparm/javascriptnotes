
//here we want to iterate through whole array and want a single value
const cartbill=[5,5,5];
const total=cartbill.reduce((previous,curr)=>
previous+curr,0)
console.log(total);


//check if all value are numbers
//here we want to check all the value so we will use every
//
const gamescor=[1,201,405,5,5,500];
const chekifnum=gamescor.every((v)=>typeof v==="number")
console.log(chekifnum);
//find wherever first element matches the condition it will return that
//here we have to find number which is more than 200
const nummore200=gamescor.find((score)=>score>200)
console.log(nummore200);
//homework read about findIndex,some,sort

//regex is know as a regular expression[note a easy topic]
//regular expression means a pattern
let pattern ="manoj"
let regExOne=new RegExp(pattern);
let flag='gi'    //gi means in any format will searched. 
                 //only g means case sensitive searched.
                 //if g and i both will be not written so it
                 //will show index no,input,and group will be not defined.
                //here g is differen flag and i is different flag 
               //but we can combined these two flags and can be
               //writttn like "gi"
let regExtwo=new RegExp(pattern,flag) //second way of writting regex
                                      //in this there is pattern and 
                                      //flag both are include
let regExthree=/manoj/gi;//this is third way of writting regular expression
const starcheck="manoj is not a good boy he is idiot";
const result=regExthree.test(starcheck);
console.log(result);  
const anotherResult=starcheck.match(regExthree);
console.log(anotherResult);
const onemoreresult=starcheck.replace(regExthree,"m-a-n-o-j");
console.log(onemoreresult);
const weburl="https://google.com/manoj%40parmar";
//const useableurl=weburl.replace(/%20/,'-');
const useableurl=weburl.replace(/%\d0/,'-') //\d means for any digit.
console.log(useableurl);
//note practice on https://regexr.com  cheatsheat of regularexpression will be there
//and community pattern is also important

//Which of the following is a valid regular expression in JavaScript to match a string that starts with "hello" and ends with "world"?
//ans: /^hello.*world$/
//How is the time interval specified for setInterval() and setTimeout() functions?
//ans: In milliseconds


