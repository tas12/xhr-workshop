# xhr-workshop

## Web APIs and xhr requests

An xhr request (XMLHttpRequest) is an API that lets you communicate data between a client and server.

We use the XMLHttpRequest object to create requests via the browser (our client).

The XMLHttpRequest object gives you access to a number of methods that enable you to set up a request to another server.

## Breakdown of an xhr request

There are four main parts to an xhr request:

1. Create an instance of the XMLHttpRequest object
`var xhr = new XMLHttpRequest()`

2. Listen for a change in the status of your request
```
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // do something with the response
  }
}
```
`onreadystatechange` is a method of the XMLHttpRequest object. It is an event handler that lets you store a function. Your function is executed upon a change to the state of your request.

  If the `readyState` of your request is 4 that means the request is finished and the response is ready.

  However, you only want your function to run if the response contains the data you're after. You therefore need to check that the `status` of the request is 200 (OK). A common status is 404 (not found.) [more on statuses](https://msdn.microsoft.com/en-us/library/ms767625)

3. Open a request to the url

  `xhr.open('GET', url, true)`

  the url is usually that of another server's api. e.g. the starwars api http://swapi.co/api/

4. Send the request
`xhr.send()`

## Clone this repo for an example

` git clone https://github.com/tas12/xhr-workshop.git && cd xhr-workshop `

## Resouces

[Owen's xhr walkthrough - there are some good resources here too](https://foundersandcoders.gitbooks.io/fac8/content/week3/xhr_workshop.html)
