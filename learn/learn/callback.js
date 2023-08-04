/* A callback is a function that is passed as an argument to 
another function and is executed once the main function has
been finished .The purpose of a callback is to allow a program 
to perform actions asynchronously.This is especially useful when 
dealing with tasks that take a long time to complete or when
you want to execute multiple tasks of the same time.*/

/* callback can be used in many different scenarias in programming
,such as event handling,newtwor requests,and user interactions.They
provide a flexibe and efficient way to execute code after a certain
way to execute code after a certain task has been completed,and
can be a powerful tool for writing clean and efficient code.However,
It's important to use callback carefully ,as they can quicky 
become difficult to manage and lead to what is know as "callback hell".
 */

//what is the need for a callback?
/* Javascript is a single-threaded language,which means,it executes
the code sequentially one life after another.However,there are some 
cases where multiple tasks or operations can be executed concurrently
without waiting for each other to complete them. This is asychronous 
programming.*/

//callback hell
/*callback hell is a situation in asynchronous programming where 
multiple levels of nested callback make the code difficult to
read,understand and maintain.This can occur when you have to 
execute a series of asynchronous tasks.where each task depends
on the output of the previous task, and you need to pass the results
of each task to the next one.

when you use a lot of nested callbacks,the code can become difficult
to read and maintain.Additionally,if there are any errors in the code,
it can be difficult to pinpoint where the errors are occuring.

To avoid callback hell,there are several techniqes you can use in
javascript,such as promises and async/await functions.we will be


*/