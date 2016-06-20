# xhr-workshop

## Web APIs and xhr requests

An xhr request (XMLHttpRequest) is an API that lets you communicate data between a client and server.

We use the XMLHttpRequest object constructor to create requests via the browser (our client).

The XMLHttpRequest object gives you access to a number of methods that enable you to set up a request to another server.

## Breakdown of an xhr request

There are four main parts to an xhr request:

### 1. Create an instance of the XMLHttpRequest object. 

This will store your xhr request which you can access using the various properties and methods that come with it. [see here](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
  `var xhr = new XMLHttpRequest()`

Properties we'll use: `onreadystatechange`, `readyState`, `status`, `response`(in the code along example)

Methods we'll use: `open()`, `send()`

### 2. Listen for a change to the status of your request
  ```
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // do something with the response
    }
  }
  ```
  The `onreadystatechange` property is an event handler that runs whenever the readyState of your request changes. You can assign it a function which gets executed upon change in readyState. 

  If the `readyState` property of your request is 4 that means the request is finished and the response is ready. [more on onreadystate](http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp)

  However, you only want your function to run if the response contains the data you're after. You therefore need to check that the `status` property of the request is 200 (OK). Another common status is 404 (not found.) [more on statuses](https://msdn.microsoft.com/en-us/library/ms767625)

### 3.Initialise your request to the url you want to get data from

  `xhr.open('GET', url, true)`

  The url is usually that of another server's api. e.g. the starwars api http://swapi.co/api/
  
  There are 3 parts to this method:
   - The Http request method. e.g. GET, POST, DELETE
   - The url you're making a request to
   - Whether or not your request is asynchronous (boolean)

### 4. Send the request

  `xhr.send()`

## Clone this repo for an example

` git clone https://github.com/tas12/xhr-workshop.git && cd xhr-workshop `

## Resouces

[Owen's xhr walkthrough - there are some good resources here too](https://foundersandcoders.gitbooks.io/fac8/content/week3/xhr_workshop.html)
[XMLHttpRequest docs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
