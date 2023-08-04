//Introduction to Network and APIs
/*Network request and Apis are fundamental to modern web 
development.In simple terms,a network request is a process
of sending request from client(usually a web browser) to
a server and receiving a response.This process is often
used to retrieve data from a server,such as HTML pages,images
,or other resources,or to send data to the server,such as form
submisions of user Input.

APIs (Appication progamming Interface) are interface that defines
how software components shound interact with each other.In the
context of web development,an API is typically a set of rules
and protocols that enables a client to interact with as server
and retrive or manipulate data.The data can be in a various 
formats,such as JSON or XML,and is often used to create
dynamic and interactive web applications.
*/

//Introduction to Fetch API
/* The fetch API was introduced as a part of the web standards
efforts to modernize and simplify web development by providing a
more flexible and powerful way to make network requests.In JavaScript
.Before the fetch Api,developers used the XMLHttpRequest(XHR) API
to make network requests.However,XHR had some limitaions so
it was replaced by fetch API 

Fectch Api provides a simpler and more powerful way to make 
requests .It uses a promise based syntax and it is more flexible
request and response Api.The fetch api is now widely used in modern
web development and has helped to steamline the process of making requests
and processing responses in js.


      How to use Fetch?
      *we need to call the fetch() method on the client side.
      *the fetch() method requires one parameter,the URL
      request and return a promise.
      *the fetch() methods optionally takes another parameter
      of options array.

      The fetch() method returns a promise that resolve to a
      response object when the request is completed.The resopnse
      object represents the HTTP response returned by the server
      and provides access to the response headers,status and body.


*/

fetch("https://type.fit/api/quotes")
.then(function exec(response){
    return response.json();
})
.then(function exec(response){
    console.log(data);
})